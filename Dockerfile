# pull official base image
FROM node:12.19.0-alpine

# set working directory
WORKDIR /srv/app/portfolio

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

LABEL maintainer="Ioan Zîcu <ioan.zicu94@gmail.com>"

# install app dependencies
COPY package.json /srv/app/portfolio
COPY yarn.lock /srv/app/portfolio
RUN yarn install --ignore-engines

# add app
COPY . /srv/app/portfolio
RUN yarn build

EXPOSE 3000

# start app
CMD ["yarn", "start"]