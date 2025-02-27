# Stage 1: Build Frontend
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all source files
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html

# Copy build output from previous stage
COPY --from=build /app/dist .


# Expose required ports
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
