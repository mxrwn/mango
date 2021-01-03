FROM node:15.5.0-alpine3.10

WORKDIR /usr/app/api

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]