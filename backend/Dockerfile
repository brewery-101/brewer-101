FROM node:14
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 9229 9230

WORKDIR ./home/node/app
COPY package*.json ./
COPY tsconfig.json ./
RUN chown node:node -R ./
USER node
RUN npm install --no-optional
CMD ["npm", "run", "dev"]