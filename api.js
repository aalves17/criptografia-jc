const axios = require('axios');
const https = require('https');
const util = require('./utils');
const process = require('./process');

module.exports = {
    getChallenge: function(){
        const myToken = 'c8ab0ce60da5344bc3313c5f93099e9b543f682d';

        const urlGET = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=' + myToken;

        const agent = new https.Agent({
            rejectUnauthorized: false
          });

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

    }
}