const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/users.routes');
const links = require('./routes/links.routes'); 

const app = express();

// settings 
app.set('port', process.env.PORT || 4200)

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(express.json());

// routes
app.use('/api/v1/links', links);
app.use('/api/v1/users', users);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});