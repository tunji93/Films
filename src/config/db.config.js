const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
  } = process.env;
  



  module.exports = {
    MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  };