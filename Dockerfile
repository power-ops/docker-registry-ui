FROM node:14.4.0 AS prepare
COPY ./docker-registry-ui/package.json /app/
WORKDIR /app 
RUN npm i

FROM node:14.4.0 AS build
COPY ./docker-registry-ui/ /app/
COPY --from=prepare /app/node_modules /app/node_modules/
WORKDIR /app 
RUN npm run build

FROM nginx
COPY --from=build /app/dist/ /usr/share/nginx/html
