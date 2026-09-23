# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose React port
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]