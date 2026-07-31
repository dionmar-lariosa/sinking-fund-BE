import { Pool } from "pg";
import { configDotenv } from "dotenv";

configDotenv({
  path: `.env.${process.env.NODE_ENV ?? "local"}`,
  debug: process.env.IS_DEBUG
});

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
  maxUses: 7500
});
