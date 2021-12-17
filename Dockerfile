# Build

FROM node:16.10-alpine AS build

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

# Production

FROM node:16.10-alpine

WORKDIR /app

COPY --from=build /app/.next/ ./.next/

COPY --from=build /app/package.json ./package.json

RUN yarn install --prod

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
