import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  var client: PrismaClient | undefined;
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const client: PrismaClient = globalThis.client ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.client = client;
}

export { client };
