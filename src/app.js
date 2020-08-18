const express = require('express');
const app = express();
const router = require('../routes/api')
const path = require('path');
const { seed } = require('../server/seed')
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use("/api", router);

const init = async function() {
    seed();
    await app.listen(PORT, function() {
        console.log(`Server is listening on port ${PORT}...`)
    });
}

init();