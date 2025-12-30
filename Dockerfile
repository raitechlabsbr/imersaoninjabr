# --- Etapa 1: Build (Usando PNPM) ---
FROM node:18 as build

WORKDIR /app

# Ativa o pnpm
RUN corepack enable

# Copia os ficheiros de definição
COPY package.json pnpm-lock.yaml* ./

# Copia a pasta de patches (necessário para o teu projeto)
COPY patches ./patches

# Instala as dependências
RUN pnpm install

# Copia todo o código
COPY . .

# --- MUDANÇA IMPORTANTE AQUI ---
# Em vez de 'pnpm run build' (que tenta compilar o backend junto),
# vamos rodar apenas o build do Vite para gerar o site estático.
RUN npx vite build

# --- Etapa 2: Servidor (Nginx) ---
FROM nginx:alpine

# Remove a página padrão do Nginx (aquela "Welcome to nginx" que estás a ver)
RUN rm -rf /usr/share/nginx/html/*

# Copia o conteúdo da pasta dist (gerada pelo Vite) para o Nginx
# O ponto final (.) garante que copiamos o CONTEÚDO, não a pasta em si
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Configuração SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]