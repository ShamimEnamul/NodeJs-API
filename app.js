const express = require('express');
const bodyParser = require('body-parser');
const feedRouters = require('./routes/feed_router');

const app = express();

//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use('/feed',feedRouters);
app.listen(8080);