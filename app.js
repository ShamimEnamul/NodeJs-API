const express = require('express');
const bodyParser = require('body-parser');
const feedRouters = require('./routes/feed_router');
const mongoConnect = require('./util/database');
const app = express();

//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json


//Cross-Origin-Resource-Sharing (CORS)
app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed',feedRouters);


mongoConnect((client)=>
{
    console.log(client);
    app.listen(8080);
});