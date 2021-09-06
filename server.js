const express = require('express');
const app = express();

app.use('/', express.static('public'));
app.use('/', express.static('src'));

app.get('/', (req, res) => {
    res.send('Welcome to express server')
})
app.get('/cors', (req, res) => {
    res.send('CORS enabled for iTunes Search API')
})
app.listen(1000, () => {
    console.log('listening on port 1000')
})