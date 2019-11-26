const fs = require('fs');
const path = require('path')
const axios = require('axios');
const https = require('https');
const util = require('./utils');
const request = require('request');
const process = require('./process');

const myToken = 'c8ab0ce60da5344bc3313c5f93099e9b543f682d';

const urlGET = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=' + myToken;
const urlPOST = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=' + myToken;

const agent = new https.Agent({
    rejectUnauthorized: false
});

module.exports = {
    getChallenge: function(){

        axios.get(urlGET, { httpsAgent: agent })
        .then(response => {
            var result = response.data;

            var number = result.numero_casas;
            var ciphertext = result.cifrado;

            result.decifrado = process.decrypt(ciphertext, number);
            result.resumo_criptografico = process.sha1(result.decifrado);

            util.saveFile(result);
        })
        .catch(error => {
            console.log(error);
        });
    },
    sendChallenge: function(){
        var jsonPath = path.join(__dirname, '..', 'criptografia-jc', 'answer.json');

        const file = fs.createReadStream(jsonPath);

        request({
            method: 'POST',
            url: urlPOST,
            headers: {
            'Content-Type': 'multipart/form-data',
            },
            rejectUnauthorized: false,
            formData: {
            answer: file
            }
        }, (err, res, body) => {
            if (err) {
                console.log(err);
            }

            console.log(res);

            }
        );
    }
}