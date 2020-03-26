const dotenv = require('dotenv');

dotenv.config();

const { DATABASE_URL } = process.env;
const { Client } = require('pg');

console.log(DATABASE_URL);

const config = {
    connectionString: DATABASE_URL,
    ssl: true
};
var client = new Client(config);

client.connect();

client.query('SELECT * FROM athlete;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});
