FROM node:latest as build
WORKDIR /usr/src/app/qweqwe
COPY . .
RUN npm ci --silent
CMD npm run publish
