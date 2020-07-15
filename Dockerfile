# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:14

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files from host computer to the container
COPY . .

# Specify port app runs on
ENV HOST 0.0.0.0
EXPOSE 8080

# Run the app
CMD [ "npm", "start" ]