
const mongoose = require("mongoose");
const config = require("./config");

const connectionString = `mongodb+srv://${config.db.user_name}:${config.db.password}@root.izb9j.mongodb.net/?retryWrites=true&w=majority&appName=Root`;
class Database {
  constructor() {
    this.connect();
  }
  connect() {
    //dev env
    if (1 === 1) {
        console.log("con",config.db.user_name);
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
      mongoose
        .connect(connectionString)
        .then((_) => {
          console.log("connected to DB");
        })
        .catch((er) => {
          console.log("can not connect to DB", er);
        });
    }
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const mongoDBInstance = Database.getInstance();
module.exports = mongoDBInstance;