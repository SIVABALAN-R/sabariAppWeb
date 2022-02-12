FROM node:latest
RUN mkdir app
COPY  . app/ 
WORKDIR /app
RUN npm i
EXPOSE 3001
CMD [ "node", "index.js" ]
