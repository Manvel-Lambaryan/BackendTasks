const PORT = process.env.PORT || 3000;

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/myapp";
const isProduction = process.env.NODE_ENV === "production";

function getEnvironmentInfo() {
  return {
    port: PORT,
    database: DATABASE_URL,
    environment: isProduction ? "production" : "development",
    isProduction,
  };
}

module.exports = {
  PORT,
  DATABASE_URL,
  isProduction,
  getEnvironmentInfo,
};
