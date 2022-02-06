FROM node:current-alpine

# Working directory be app
WORKDIR /usr/app/client/

COPY client/package*.json ./

# Install dependencies
RUN npm install

# copy local files to app folder
COPY client/ ./

RUN npm run build

# Stage 2 : Build Server

FROM node:current-alpine

WORKDIR /usr/src/app/
COPY --from=0 /usr/app/client/build/ ./client/build/

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "start"]