FROM nginx:latest

# Install dependencies for Certbot
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx && rm -rf /var/lib/apt/lists/*

COPY beeblue.conf /etc/nginx/conf.d/default.conf

VOLUME /etc/letsencrypt /var/log/letsencrypt

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
