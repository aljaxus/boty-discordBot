### Initialisation
#Define the base image - using node v.10, official docker image
FROM node:10
#Define the maintainer of this image
LABEL maintainer="me@aljaxus.eu"
#Define the working directory (on final container)
WORKDIR /var/server

### Build process
# Copy the package.json, package-lock.json from host machine to build container
COPY package*.json yarn.* ./
# Install all dependencies on the build container
RUN yarn install --force
### Post build process
#Copy all the files from the build container to final container
COPY . .