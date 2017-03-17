
// Dependencies
const express = require('express');
const body_parser = require('body-parser');
const utility = require('../library/utility');

// Express Declaration
const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extened: true,
}));


// Main URL
app.use('/api/v1', require('../routes/api.js')(express));

// Configuration
const port = process.env.PORT || 3000;

const server = app.listen(port, function(){
  console.log('Server Active on', port);
});

module.exports = server;
