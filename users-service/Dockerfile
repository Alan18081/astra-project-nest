FROM node:10

RUN npm i -g typescript ts-node nodemon

WORKDIR /var/www/astra-store/users-service
ADD package.json /var/www/astra-store/users-service
RUN yarn install

ADD . /var/www/astra-store/users-service

RUN ["chmod", "+x", "/var/www/astra-store/users-service/start.sh"]

EXPOSE 4000

CMD ["./start.sh"]