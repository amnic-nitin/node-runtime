FROM node:18.7.0-alpine as BUILD
ENV NODE_ENV production

WORKDIR /app
RUN apk add dumb-init && chown node:node /app
USER node:node


COPY --chown=node:node package*.json ./
COPY --chown=node:node app.js app.js
COPY --chown=node:node config/ config/

ENV PACKAGE_MANAGER=NPM
RUN npm ci --only=production

ENV config_path=config/prod.env
CMD ["dumb-init", "node", "app.js"]
