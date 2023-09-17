const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Index File',
        message: 'Lorem ipsum...'
    });
});

app.use('/users', usersRouter);


app.listen(port, () => console.log(`Application running port ${port}!`));