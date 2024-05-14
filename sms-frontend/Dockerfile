FROM node:alpine AS development
WORKDIR /react-app
EXPOSE 3000
COPY ./package*.json /react-app
RUN npm install
COPY . .
CMD ["npm","start"]