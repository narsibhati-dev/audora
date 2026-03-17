# WebSocket Signal Dockerfile (Bun)

FROM oven/bun:1.3.10-debian

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json bun.lock turbo.json ./

COPY packages/database/package.json ./packages/database/
COPY packages/types/package.json ./packages/types/
COPY packages/typescript-config/package.json ./packages/typescript-config/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY apps/audora-signal/package.json ./apps/audora-signal/

RUN bun install

COPY packages ./packages
COPY apps/audora-signal ./apps/audora-signal

EXPOSE 8000 8001

CMD ["bun", "run", "start:signal"]
