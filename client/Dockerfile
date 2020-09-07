FROM node:12

WORKDIR /client

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /client/

RUN npm install

COPY . /client/

EXPOSE 3000

CMD [ "npm", "start" ]