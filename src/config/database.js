//database.js

import mongoose from "mongoose";

class DbConnection {
  constructor() {
    const url =
      process.env.MONGODB_URI || `mongodb://localhost:27017/trainingSaviourDb`;
    console.log("Establish new connection with url", url);
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

export default new DbConnection();