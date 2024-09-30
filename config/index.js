const config = {
  app: {
    port: process.env.PORT || "3000",
  },
  db: {
    user_name: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = config;
