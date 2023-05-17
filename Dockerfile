FROM node:17-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
