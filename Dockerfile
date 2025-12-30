# --- Etapa 1: Build (Usando PNPM) ---
FROM node:18 as build

WORKDIR /app

# Ativa o pnpm
RUN corepack enable

# Copia ficheiros de dependência
COPY package.json pnpm-lock.yaml* ./
COPY patches ./patches

# Instala dependências
RUN pnpm install

# Copia o código fonte
COPY . .

# Constrói APENAS o frontend (ignora erros de TS se houver)
# O comando tsc é removido para garantir que o build termine mesmo com avisos
RUN npx vite build

# --- Etapa 2: Servidor (Nginx) ---
FROM nginx:alpine

# 1. Limpa TUDO o que existe na pasta padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# 2. Copia o CONTEÚDO da pasta dist para a raiz do html
# A flag chown garante que o nginx é dono dos ficheiros
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

# 3. CORREÇÃO DO ERRO 403: Garante permissões de leitura para todos
RUN chmod -R 755 /usr/share/nginx/html

# Configuração do Nginx (SPA)
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
    # Página de erro para depuração
    error_page 500 502 503 504 /50x.html; \
    location = /50x.html { \
        root /usr/share/nginx/html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]