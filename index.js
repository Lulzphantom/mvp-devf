const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4200;
const users = require('./routes/users.routes');
const links = require('./routes/links.routes'); 

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/links', links);
app.use('/api/v1/users', users);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});