const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('I\'m working!');
});

app.listen(80, () => {
    console.log('App is listening on port 80');/* eslint-disable-line no-console */
});
