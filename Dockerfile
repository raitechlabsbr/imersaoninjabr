# --- Etapa 1: Build ---
FROM node:18 as build

WORKDIR /app

# Copia os ficheiros de dependência
COPY package*.json ./

# --- A CORREÇÃO ESTÁ AQUI ---
# 1. Removemos o package-lock.json vindo do Windows para evitar conflitos
# 2. Limpamos o cache do npm
# 3. Instalamos as dependências do zero
RUN rm -rf package-lock.json node_modules && npm install

# Copia o restante código
COPY . .

# Build do Vite
RUN npm run build

# --- Etapa 2: Servidor Nginx ---
FROM nginx:alpine

# Copia o build da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Configuração opcional para garantir que o React Router funcione (SPA)
# Cria um ficheiro de configuração básico para o Nginx on-the-fly
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