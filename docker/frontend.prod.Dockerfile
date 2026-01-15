# Frontend Dockerfile (Bun)

FROM oven/bun:1.3.4-debian

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_HTTP_URL
ARG NEXT_PUBLIC_SIGNALING_URL

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_HTTP_URL=$NEXT_PUBLIC_HTTP_URL
ENV NEXT_PUBLIC_SIGNALING_URL=$NEXT_PUBLIC_SIGNALING_URL

COPY package.json bun.lock turbo.json ./

COPY packages/database/package.json ./packages/database/
COPY packages/types/package.json ./packages/types/
COPY packages/ui/package.json ./packages/ui/
COPY packages/tailwind-css/package.json ./packages/tailwind-css/
COPY packages/typescript-config/package.json ./packages/typescript-config/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY apps/audora-frontend/package.json ./apps/audora-frontend/

RUN bun install

COPY packages ./packages
COPY apps/audora-frontend ./apps/audora-frontend

RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start:frontend"]
