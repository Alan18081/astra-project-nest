FROM node:10

RUN npm i -g typescript ts-node nodemon

WORKDIR /var/www/astra-store/api-gateway
ADD package.json /var/www/astra-store/api-gateway
RUN yarn install

ADD . /var/www/astra-store/api-gateway

RUN ["chmod", "+x", "/var/www/astra-store/api-gateway/start.sh"]

EXPOSE 4000

CMD ["./start.sh"]