# Use an official Node runtime as a parent image
FROM node:18-alpine

# Declare ARG for build-time environment variable
ARG NEXT_PUBLIC_API_URL

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# COPY yarn.lock ./

# Install project dependencies
RUN npm install
# Or if using yarn: RUN yarn install

# Copy the rest of the application code
COPY . .

# Make the ARG available as an ENV variable during the build
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build the Next.js application
RUN npm run build
# Or if using yarn: RUN yarn build

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
# Or if using yarn: CMD ["yarn", "start"] 