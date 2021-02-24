FROM node:latest

ENV NODE_ENV production

RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm i -g pm2

COPY package*.json process.yml ./

USER node

RUN npm i 

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "./process.yml"]
