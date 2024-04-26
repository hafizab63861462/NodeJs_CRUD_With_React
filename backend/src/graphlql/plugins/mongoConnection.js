const mongoose = require('mongoose');

function connect(connectString) {
  try {

    const MongoConnection = mongoose.createConnection(connectString)
    MongoConnection.on('connected', () => {
      console.log(`Connection to MongoDB (${connectString}) successful 🚀`);
    });

    MongoConnection.on('disconnected', () => {
      console.log('Mongoose connection disconnected');
    });

    MongoConnection.on('error', (err) => {
      console.error(`Mongoose connection error: ${String(err)}`);
    });

    return MongoConnection;
  } catch (err) {
    console.error(err);
    return `MongoConnection fail`;
  }
}

const MongoConnection = connect(process.env.MONGODB_CONNECTION_STRING);
const MongoDb = require("../models/index.js")(MongoConnection);

module.exports = {
  connect,
  mongoose,
  MongoDb
};