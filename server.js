const express = require("express");
const app = express();
require("dotenv").config();
const {connectDB}=require("./config/db");
const createTable = require("./config/createTable");

createTable.sync()
   .then(()=>console.log("Table is created"))
   .catch(err => console.log(err));
app.listen(3000, () => {
  console.log(" Server running on port 3000");
});