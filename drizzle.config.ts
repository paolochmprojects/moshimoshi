import { defineConfig } from "drizzle-kit";


export default defineConfig({
    schema: "./src/lib/database/**/*.schema.ts",
    out: "./drizzle",
    dialect: "sqlite",
    driver: "turso",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN
    }
})