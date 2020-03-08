const express = require('express');
const app = express();
const port = 8081;

app.get('/', (w, r) => {
    r.send('hello world');
});