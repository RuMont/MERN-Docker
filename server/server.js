require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8080;
const dbo = require('./db/conn');
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

app.use(cors());
app.use(express.json());
app.use(require('./routes/routes'));

app.use(express.static(CLIENT_BUILD_PATH));
app.get("/", function (req, res) {
    res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});


dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/`);
    });
});