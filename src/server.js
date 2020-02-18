const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');


app.use(express.static(publicPath));
// app.use(express.static('../build'));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(__dirname);
    console.log(path.join(publicPath, 'index.html'));
    console.log(`Server is up on port ${port}!`);
});

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(8080);