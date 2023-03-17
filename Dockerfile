FROM node:latest
#RUN mkdir /user/src/app
WORKDIR /user/src/app
COPY . .

RUN npm ci

CMD ["npm", "start"]