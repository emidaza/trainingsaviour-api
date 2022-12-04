//database.js

import mongoose from "mongoose";
import env from "./environment";

class DbConnection {
  constructor() {
    const url = env.MONGODB_URI;
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