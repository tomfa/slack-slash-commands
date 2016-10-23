import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { slackAuth } from './middleware';

import api from './api';

var app = express();


app.server = http.createServer(app);

app.use(slackAuth);
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', api());

// Comment leftovers from earlier
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



app.server.listen(process.env.PORT || 8080);

console.log(`Started on port ${app.server.address().port}`);

export default app;
