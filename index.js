#!/usr/bin/env node

const port = require('env-port')('8000');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('*', function (req, res) {
    console.log('\x1b[35m\x1b[4mURL:\x1b[0m\x1b[36m', req.originalUrl, '\x1b[0m\x1b[33m\nBody:\x1b[0m', req.body, '\x1b[33m\nParams:\x1b[0m', req.params, '\x1b[33m\nQuery:\x1b[0m', req.query);
    res.json({ logged: true });
});

app.listen(port, function () {
    console.log(require('server-welcome')(port, 'log-post-content'));
});