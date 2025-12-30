# --- Etapa 1: Build (Construção) ---
# MUDANÇA: Usamos a imagem completa (não alpine) para evitar erros de compilação
FROM node:18 as build

WORKDIR /app

# Copia os ficheiros de dependência
COPY package*.json ./

# MUDANÇA: 'npm install' normal. 
# Se continuar a falhar, podes tentar 'rm -rf package-lock.json && npm install' 
# mas geralmente a imagem completa resolve.
RUN npm install

# Copia o restante código
COPY . .

# Build do Vite
RUN npm run build

# --- Etapa 2: Servidor (Nginx) ---
# Aqui mantemos o Alpine pois é apenas para servir ficheiros estáticos (leve)
FROM nginx:alpine

# Copia o build da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]