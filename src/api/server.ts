const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('server.json');
const port = process.env.PORT || 3000;

app.use('/api', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req: any, res: any) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);