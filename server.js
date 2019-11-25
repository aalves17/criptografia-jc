const express = require('express');
const axios = require('axios');
const https = require('https');
const fs = require('./fs');

const app = express();

const myToken = 'c8ab0ce60da5344bc3313c5f93099e9b543f682d';

const agent = new https.Agent({
    rejectUnauthorized: false
  });

axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=' + myToken, { httpsAgent: agent })
.then(response => {
    var result = response.data;
    fs.saveFile(result);
})
.catch(error => {
    console.log(error);
});

app.listen(3333);