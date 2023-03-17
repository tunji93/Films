FROM node:latest

WORKDIR user/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]