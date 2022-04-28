FROM node:latest

COPY /package.json /micro-client/package.json
COPY /tsconfig.json /micro-client/tsconfig.json
COPY /tsconfig.build.json /micro-client/tsconfig.build.json

WORKDIR /micro-client

RUN npm install 
RUN npm run build
##&& mv /nodeapp/node_modules /nodeapp/node_modules

COPY / /micro-client

EXPOSE 3000

CMD npm start