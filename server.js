const express = require('express');
const api = require('./api');

const app = express();

api.getChallenge();
api.sendChallenge();

app.listen(3333);