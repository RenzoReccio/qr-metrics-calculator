FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE 3002
CMD ["node", "src/infrastructure/server.js"]