module.exports = {
    decrypt: function(str, number){
        var strDecrypted = [];
        var spaceASCIICode = 32;

        for(var i=0; i < str.length; i++){
            let actualASCIICode = str.charCodeAt(i);

            if(actualASCIICode !== spaceASCIICode){
                let newASCIICode = actualASCIICode - number;
                strDecrypted.push(String.fromCharCode(newASCIICode));
            }else{
                strDecrypted.push(" ");
            }

            console.log(strDecrypted);
        }

        return strDecrypted;
    },
    sha1: function(str){

    }
}