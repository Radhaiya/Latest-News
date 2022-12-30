const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/routes')

app.use('/news', routes);

app.get('/', (req, res) => {
    res.send('Welcome to Indian Latest News API')
})

app.listen(3000, () => {
    console.log('Server Running ');
})
