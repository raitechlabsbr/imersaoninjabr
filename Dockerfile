# --- Etapa 1: Build (Construção) ---
# Usamos uma imagem Node leve para instalar dependências e gerar os ficheiros
FROM node:18-alpine as build

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os ficheiros de dependências primeiro (aproveita o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto do código para dentro do container
COPY . .

# Executa o comando de build do Vite (gera a pasta 'dist')
RUN npm run build

# --- Etapa 2: Servidor (Nginx) ---
# Usamos o Nginx para servir os ficheiros estáticos de forma muito leve
FROM nginx:alpine

# Copia os ficheiros gerados na etapa anterior para a pasta do Nginx
# NOTA: O Vite gera os ficheiros na pasta 'dist' por padrão
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 do container
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]