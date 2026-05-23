const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "appuser",
  password: "password123",
  database: "appdb",
});

connection.connect((err) => {
  if (err) {
    console.log("DB connection failed ❌", err);
  } else {
    console.log("Database connected successfully ✅");
  }
});

module.exports = connection;