# ============================
# Backend Dockerfile (Bun)
# ============================

FROM oven/bun:1.3.4@sha256:335649abebdd8d815579aac4a6bc9350c293e40848763db73b0955d08333f7bd

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Copy necessary files for dependency installation
COPY ../package.json ./package.json
COPY ../bun.lock ./bun.lock
COPY ../turbo.json ./turbo.json
COPY ../packages ./packages
COPY ../apps/audora-api ./apps/audora-api

# Install deps
RUN bun install

# Expose backend port
EXPOSE 9000

# Run the server with database deployment
CMD ["bun", "run", "start:api"]