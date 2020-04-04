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

const config = {
  connectionString: DATABASE_URL,
  ssl: true
};
var client = new Client(config);

app.get("/ping", function(req, res) {
  console.log("hello this is a log");

  return res.send("pong");
});

app.get("/try-connection", (req, res) => {
  console.log(DATABASE_URL);
  const config = {
    connectionString: DATABASE_URL,
    ssl: true
  };
  var client = new Client(config);
  client.end();
});

app.get("/userLoginAttempt", (req, res) => {

  let username = req.headers['username'];
  let password = req.headers['password'];

  client.connect();

  const query = {
    // give the query a unique name
    name: 'fetch-user',
    text: 'SELECT * FROM user WHERE email = $1 && password == $2',
    values: [username, password],
  };

  client.query(query, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    return res;
  });
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(__dirname);
  console.log(path.join(publicPath, "index.html"));
  console.log(`Server is up on port ${port}!`);
});
