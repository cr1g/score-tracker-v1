FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./execute.sh

CMD [ "./execute.sh" ]
