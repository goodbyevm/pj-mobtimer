ARG NODE_VERSION=latest
FROM node:${NODE_VERSION}

#RUN mkdir -p /usr/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 3000

# install and cache app dependencies

#VOLUME /Users/ponjoh/Repos/pj-mobtimer /usr/src/app

CMD ["npm", "start"]
