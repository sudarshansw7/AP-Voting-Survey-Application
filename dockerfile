FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install 
RUN npm install react-scripts
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
