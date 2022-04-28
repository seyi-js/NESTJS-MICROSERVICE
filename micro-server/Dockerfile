FROM node:latest

COPY /package.json /micro-server/package.json
COPY /tsconfig.json /micro-server/tsconfig.json
COPY /tsconfig.build.json /micro-server/tsconfig.build.json

WORKDIR /micro-server

RUN npm install 
RUN npm run build
##&& mv /nodeapp/node_modules /nodeapp/node_modules

COPY / /micro-server

##EXPOSE 3000

CMD npm start