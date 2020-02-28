FROM node:latest as build
WORKDIR /usr/src/app/qweqwe
COPY . .
RUN npm ci --silent
RUN npm run build --silent

# set up production environment
# the base image for this is an alpine based nginx image
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY --from=build /usr/src/app/qweqwe/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]