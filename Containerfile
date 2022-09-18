# ======= NODE =======
FROM node:alpine as build

# Working directory (this is where the application will be inside the container).
WORKDIR /app

# Copy the app to the container
COPY . /app/

# Prepare the container for building react
RUN npm install
RUN npm run build

# ======= NGINX =======
FROM nginx:alpine

# Setup certbot with letsencrypt
RUN apk add certbot certbot-nginx

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY .config/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80 443
CMD ["nginx","-g","daemon off;"]

