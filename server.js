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

//For local database connection
const localConfig = {
  connectionString: "postgres://admin:taclete2020@localhost:5432/taclete"
};
let client = new Client(localConfig);

// const config = {
//   connectionString: DATABASE_URL,
//   ssl: true
// };
// let client = new Client(config);


app.get("/ping", function(req, res) {
  console.log("hello this is a log");

  return res.send("pong");
});

app.post("/userLoginAttempt", (req, res) => {

  let username = req.data['user'];
  let password = req.data['password'];
  client.connect();

  const query = {
    // give the query a unique name
    name: 'fetch-user',
    text: 'SELECT * FROM athlete WHERE email = $1 AND password = $2',
    values: [username, password],
  };
  
  client.query(query, (err, queryRes) => {
    console.log(JSON.stringify(queryRes));
    console.log(err);
    if (err) throw err;
    if (queryRes.rows.length === 1) {
      res.status(201);
      let data = queryRes.rows[0];
      res.send({
        firstName: data['first_name'],
        lastName: data['last_name'],
        cohortType: 'ROTC',
      })
    } else {
     res.status(500);
    }
  }).finally(() => client.end());

});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(__dirname);
  console.log(path.join(publicPath, "index.html"));
  console.log(`Server is up on port ${port}!`);
});
