FROM node:latest
RUN mkdir /codematic-test-final
COPY . .
WORKDIR /codematic-test-final

RUN npm ci

CMD ["npm", "start"]
