const mongoose = require("mongoose");

module.exports = (MongoConnection) => {

  const models = {
    User: MongoConnection.model("User", require("./user")),
  };

  return { ...models };
};