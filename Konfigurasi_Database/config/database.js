const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express-mysql",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection Succesfully");
  }
});

module.exports = connection;
