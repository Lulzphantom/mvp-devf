const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4200;
const users = require('./routes/users');

const app = express();
app.use(bodyParser.json());

app.use('/', users);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})