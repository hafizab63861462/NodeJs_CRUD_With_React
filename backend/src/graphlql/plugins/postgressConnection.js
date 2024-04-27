const { DataSource } = require("typeorm");
require('reflect-metadata')
const { User } = require('../entity/user')

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "12345",
  database: "postgres",
  entities: [User],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

module.exports = {
  AppDataSource
};