# --- Etapa 1: Build (Usando PNPM) ---
FROM node:18 as build

WORKDIR /app

# Ativa o pnpm (que já vem no Node 18 via corepack)
RUN corepack enable

# Copia os ficheiros de definição de pacotes
COPY package.json pnpm-lock.yaml* ./

# IMPORTANTE: Copia a pasta de patches antes de instalar
# O teu package.json exige isso para o 'wouter'
COPY patches ./patches

# Instala as dependências usando pnpm
RUN pnpm install

# Copia o resto do código
COPY . .

# Cria a versão de produção
RUN pnpm run build

# --- Etapa 2: Servidor (Nginx) ---
FROM nginx:alpine

# Copia os ficheiros estáticos gerados (pasta dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Configuração do Nginx para Single Page Application (React)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]