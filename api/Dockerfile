FROM node:12

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 8000

CMD [ "npm", "start" ]