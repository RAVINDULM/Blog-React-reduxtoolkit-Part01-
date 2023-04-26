# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app

# Build the production version of the application
# RUN npm run build

# Expose port 3000
# EXPOSE 3000

# Start the application
CMD ["npm","run", "start"]
