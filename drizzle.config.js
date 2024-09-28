/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:2BOzn3wkUefu@ep-wandering-moon-a59rsf5y.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };
  