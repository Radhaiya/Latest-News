const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/routes')

app.use('/', routes);   

app.get('/', (req, res) => {
    res.send('he')
})

app.listen(PORT, () => {
    console.log('Server Running');
})