FROM node:latest as build
WORKDIR /tmp/qweqwe.io
COPY . .
RUN npm ci --silent
RUN npm run publish

# set up production environment
# the base image for this is an alpine based nginx image
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY --from=build /tmp/qweqwe.io/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]