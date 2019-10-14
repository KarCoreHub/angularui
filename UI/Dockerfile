# base image
FROM node:10.15.3
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.8
# add app
COPY . /usr/src/app

#expose the port
EXPOSE 4200

# start app
CMD ng serve --port 4200 --host 0.0.0.0