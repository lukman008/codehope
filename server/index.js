const express = require('express');

const app = express();

let getInvolvedRouter = require('./routes/getInvolved');

app.use('/get-involved', getInvolvedRouter);

module.exports = {
  path: '/api',
  handler: app
}