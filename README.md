# Audora.xyz

![Audora Logo](apps/audora-frontend/public/images/audora-logo-black.webp)

## High-Quality Podcast Recording Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/Code%20of%20Conduct-v2.0-ff69b4.svg)](CODE_OF_CONDUCT.md)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Database Management](#database-management)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [Development Tools](#development-tools)
- [Support](#support)
- [License](#license)

---

## Features

Audora offers a comprehensive set of features for professional podcast recording:

- **High-Quality Recording** - Studio-grade audio and video recording with multiple input device support
- **Real-Time Communication** - WebRTC-based peer-to-peer connections with low-latency streaming
- **Reliable Uploads** - S3 multipart uploads with automatic retry and resume capability
- **Professional Processing** - Video transcoding, audio normalization, and custom branding
- **Security and Privacy** - End-to-end encryption with secure room management

---

## Tech Stack

| Category  | Technology             |
| --------- | ---------------------- |
| Monorepo  | Turborepo              |
| Runtime   | Bun                    |
| Frontend  | Next.js 14             |
| Backend   | Express                |
| Real-time | WebRTC, WebSocket      |
| Database  | PostgreSQL, Prisma     |
| Storage   | AWS S3                 |
| Media     | FFmpeg                 |
| DevOps    | Docker, GitHub Actions |

---

## Project Structure

This monorepo is managed using **Turborepo** and is structured as follows:

```text
audora/
├── apps/
│   ├── audora-frontend/       # Next.js app for the UI
│   ├── audora-api/            # Express backend for API handling
│   └── audora-signal/         # WebSocket server for real-time communication
├── packages/
│   ├── database/              # Prisma and PostgreSQL setup
│   ├── types/                 # Shared TypeScript types
│   ├── ui/                    # Shared UI components
│   └── typescript-config/     # Shared TypeScript configuration
├── docker/
│   ├── backend.prod.Dockerfile
│   ├── frontend.prod.Dockerfile
│   ├── signal.prod.Dockerfile
│   └── db.docker-compose.yml
├── .github/workflows/         # GitHub Actions CI/CD pipelines
├── turbo.json                 # Turborepo configuration
├── docker-compose.yml         # Full stack Docker Compose
└── package.json               # Root package.json
```

---

## Getting Started

### Prerequisites

- **Bun** v1.2.5 or later
- **Node.js** v18 or later
- **PostgreSQL** v14 or later
- **Docker** and **Docker Compose**
- **FFmpeg** (for media processing)

### Installation

Clone the repository and install dependencies:

```sh
bun install
```

Copy the environment example file and configure:

```sh
cp .env.example .env
```

Start the database:

```sh
bun run db:up
```

Generate Prisma client and run migrations:

```sh
bun run db:deploy
```

Start the development server:

```sh
bun run dev
```

---

## Database Management

### Start PostgreSQL

```sh
bun run db:up
```

### Stop PostgreSQL

```sh
bun run db:down
```

### Run Migrations

```sh
bun run db:deploy
```

### Generate Prisma Client

```sh
bun run generate
```

---

## Deployment

### Docker Compose (Recommended)

Start all services with a single command:

```sh
docker compose up -d
```

This starts:

- PostgreSQL database on port 5432
- Backend API on port 9000
- Signal server on port 8000
- Frontend on port 3000

### Individual Docker Builds

```sh
# Build all services
docker compose build

# Build specific service
docker compose build frontend
docker compose build backend
docker compose build signal
```

### Production Dockerfiles

Located in the `/docker` directory:

- `backend.prod.Dockerfile` - Backend API container
- `frontend.prod.Dockerfile` - Next.js frontend container
- `signal.prod.Dockerfile` - WebSocket server container

### CI/CD Pipelines

GitHub Actions workflows automate deployment:

- `cd_api.yml` - Deploys the backend service
- `cd_frontend.yml` - Deploys the frontend application
- `cd_signal.yml` - Deploys the WebSocket server

---

## Available Scripts

| Script                   | Description                        |
| ------------------------ | ---------------------------------- |
| `bun run dev`            | Start all apps in development mode |
| `bun run build`          | Build all apps for production      |
| `bun run start`          | Start all apps in production mode  |
| `bun run start:frontend` | Start frontend only                |
| `bun run start:api`      | Start backend API only             |
| `bun run start:signal`   | Start WebSocket server only        |
| `bun run db:up`          | Start PostgreSQL with Docker       |
| `bun run db:down`        | Stop PostgreSQL                    |
| `bun run db:deploy`      | Run database migrations            |
| `bun run generate`       | Generate Prisma client             |
| `bun run lint`           | Run linting across all packages    |
| `bun run format`         | Format code with Prettier          |
| `bun run check-types`    | Run TypeScript type checking       |

---

## Development Tools

```sh
# Run linting
bun run lint

# Format code
bun run format

# Type checking
bun run check-types
```

---

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to help keep Audora a welcoming and inclusive space for everyone.

---

## License

This project is licensed under the [MIT License](./LICENSE.md).

---

<div align="center">
Made with care by the <b style="color:  #d3c9ff">audoralabs</b> Team
</div>
