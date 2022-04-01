# #stage 1
# FROM node:14.17 as node
# WORKDIR /app
# COPY package.json /app/
# COPY . .
# RUN npm install
# RUN npm run build
# #stage 2
# FROM nginx:latest
# COPY --from=node /app/dist/smart_house /usr/share/nginx/html


### STAGE 1: Build ###
FROM node:14.17.1 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY ["./config/nginx.conf", "/etc/nginx/sites-enabled"]
COPY --from=build /usr/src/app/dist/smart_house /usr/share/nginx/html



