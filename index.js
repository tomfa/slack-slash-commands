import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { sslCheckResponse, slackAuth } from './middleware';
import api from './api';

var app = express();
app.server = http.createServer(app);

app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used as
    // an API server
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// parse application/x-www-form-urlencoded and json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use middleware
app.use(sslCheckResponse, slackAuth);

// enable api
app.use('/', api());

// start app
app.server.listen(process.env.PORT || 8080);
console.log(`Started on port ${app.server.address().port}`);

export default app;
