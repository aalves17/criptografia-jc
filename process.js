const sha1 = require('crypto');

module.exports = {
    decrypt: function(str, number){
        var strDecrypted = [];

        for(var i=0; i < str.length; i++){
            let isLetter = str.charAt(i).match(/[A-Za-z]/i);

            if(isLetter){
                let actualASCIICode = str.charCodeAt(i);
                let newASCIICode = actualASCIICode - number;
                strDecrypted.push(String.fromCharCode(newASCIICode));
            }else{
                strDecrypted.push(str.charAt(i));
            }

        }

        return strDecrypted.join("");
    },
    sha1: function(str){
        const shasone = sha1.createHash('sha1');
        shasone.update(str);
        return shasone.digest('hex');
    }
}