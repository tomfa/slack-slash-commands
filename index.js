import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { sslCheckResponse, slackAuth } from './middleware';

import api from './api';

var app = express();


app.server = http.createServer(app);

// Comment leftovers from earlier
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(sslCheckResponse, slackAuth);

app.use('/', api());



app.server.listen(process.env.PORT || 8080);

console.log(`Started on port ${app.server.address().port}`);

export default app;
