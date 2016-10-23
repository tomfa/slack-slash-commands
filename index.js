import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import * as config from './config'; // get our config file
import middleware from './middleware';
import api from './api';


var app = express();
app.server = http.createServer(app);

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

app.use('/', api());

// Comment leftovers from earlier
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// 3rd party middleware
app.use(cors({
    exposedHeaders: ['Link']
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.server.listen(process.env.PORT || 8080);

console.log(`Started on port ${app.server.address().port}`);

export default app;
