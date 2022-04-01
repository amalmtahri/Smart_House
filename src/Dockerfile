#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:latest
COPY --from=node /app/dist/smart_house /usr/share/nginx/html


