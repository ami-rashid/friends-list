const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('../routes/api')
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use("/api", router);


app.use(express.json());
app.use(morgan('combined'));

const init = async function() {
    await app.listen(PORT, function() {
        console.log(`Server is listening on port ${PORT}...`)
    });
}

init();