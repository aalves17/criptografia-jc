const fs = require('fs');

module.exports = {
    saveFile: function(data){
        fs.writeFile("result.txt", JSON.stringify(data), function(err){
            if(err){
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
};