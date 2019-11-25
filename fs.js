const fs = require('fs');

module.exports = {
    saveFile: function(data){
        fs.writeFile("answer.json", JSON.stringify(data, null, "\t"), function(err){
            if(err){
                return console.log(err);
            }
        });
    }
};