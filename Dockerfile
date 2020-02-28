FROM node:latest as build
WORKDIR /usr/src/app/qweqwe
COPY . .
RUN npm ci --silent
RUN npm run publish

FROM nginx:alpine
COPY --from=build /usr/src/app/qweqwe/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
