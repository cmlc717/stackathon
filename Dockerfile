FROM node:18
WORKDIR /stackathon
# Install app dependencies
COPY package*.json .

RUN npm install
# Bundle app source
COPY . .

RUN ls -ltr
RUN pwd
EXPOSE 3000
CMD [ "npm", "start" ]