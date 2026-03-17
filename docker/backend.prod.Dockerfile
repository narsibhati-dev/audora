# Backend Dockerfile (Bun)

FROM oven/bun:1.3.10-debian

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# ARG DATABASE_URL
# ENV DATABASE_URL=$DATABASE_URL

COPY package.json bun.lock turbo.json ./

COPY packages/database/package.json ./packages/database/
COPY packages/types/package.json ./packages/types/
COPY packages/typescript-config/package.json ./packages/typescript-config/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY apps/audora-api/package.json ./apps/audora-api/

RUN bun install

COPY packages ./packages
COPY apps/audora-api ./apps/audora-api

EXPOSE 9000

CMD ["bun", "run", "start:api"]
