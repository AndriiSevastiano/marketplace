FROM alpine:3.17

ENV NODE_VERSION 18.16.1
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json ./
COPY env/.env.development ./.env

RUN rm -rf node_modules
RUN npm cache clean -force
RUN npm install
RUN npm install --no-package-lock

COPY . .

EXPOSE 3000

CMD ["npm","run","start:watch"]
