FROM node:18
WORKDIR /stackathon
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 80
CMD [ "npm", "start" ]