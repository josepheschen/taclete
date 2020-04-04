const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

const { DATABASE_URL } = process.env;
const { Client } = require('pg');

app.get("/ping", function(req, res) {
  console.log("hello this is a log");

  return res.send("pong");
});

app.get("/try-connection", (req, res) => {
  const dotenv = require('dotenv');
  dotenv.config();
  console.log(DATABASE_URL);
  const config = {
    connectionString: DATABASE_URL,
    ssl: true
  };
  var client = new Client(config);

  try {
    client.connect();

    client.query('SELECT * FROM athlete;', (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
      return res;
    });
  } catch (err) {
    console.log(err);
  }

});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(__dirname);
  console.log(path.join(publicPath, "index.html"));
  console.log(`Server is up on port ${port}!`);
});
