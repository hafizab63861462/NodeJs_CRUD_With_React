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

const MongoConnection = connect("mongodb+srv://abdullahhafiz300:MongoDb12345@local-data-base.dviasq1.mongodb.net/?retryWrites=true&w=majority&appName=local-data-base");
const MongoDb = require("../models/index.js")(MongoConnection);

// console.log('process.env.MONGODB_CONNECTION_STRING', process.env.MONGODB_CONNECTION_STRING)

module.exports = {
  connect,
  mongoose,
  MongoDb
};