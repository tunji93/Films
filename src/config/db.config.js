const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, MONGO_DB_PORT } = process.env;

module.exports = {
  MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
};

// module.exports = {
//   MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${MONGO_DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`
// };
