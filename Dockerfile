FROM node:alpine as build
WORKDIR /app/qweqwe.io
COPY . .
RUN npm ci --silent
RUN npm run publish

EXPOSE 8810

CMD node server/index.js