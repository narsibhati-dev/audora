# ============================
# Frontend Dockerfile (Bun)
# ============================

FROM oven/bun:1.3.4@sha256:335649abebdd8d815579aac4a6bc9350c293e40848763db73b0955d08333f7bd

WORKDIR /app

# Set build-time arguments for environment variables

ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_API_URL

# Expose environment variables for build-time use
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Copy necessary files for dependency installation
COPY ../package.json ./package.json
COPY ../bun.lock ./bun.lock
COPY ../turbo.json ./turbo.json
COPY ../packages ./packages
COPY ../apps/audora-frontend ./apps/audora-frontend

# Install dependencies
RUN bun install

# Build the Next.js app
RUN bun run build

# Expose and run
EXPOSE 3000
CMD ["bun", "run", "start:frontend"]