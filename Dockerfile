FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm ci

EXPOSE 8810

CMD npm run server