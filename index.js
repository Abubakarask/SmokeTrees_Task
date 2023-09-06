const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
// const bodyParser = require("body-parser");
const { connectDatabase } = require("./config/database");
const { logger } = require("./logger/lgs");

console.log("dhbdh");
require("dotenv").config({ path: "config/config.env" });
connectDatabase();
console.log("djdhb");

const PORT = process.env.PORT || 3600;
const server = express();
console.log(PORT);

//Using Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}, Time : ${logger()}`);
});
