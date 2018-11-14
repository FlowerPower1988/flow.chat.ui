const fs = require('fs');
require('./consts');

module.exports ={

    createFolder(folderDir){
        if (!fs.existsSync(folderDir)){
            fs.mkdirSync(folderDir, (err) => {
              if (err) throw err;
              console.log(`"${folderDir}" created.`);
            });
        }
    },
    
    createFile(fileDir,content= ''){
        if (!fs.existsSync(fileDir)){
            fs.writeFileSync(fileDir,content,(err) => {
              if (err) throw err;
              console.log(`"${fileDir}" created.`);
            });
        }
    },

    firstLetterToLowerCase(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    },

    firstLetterToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    
    removeExtension(string){
        return string.split('.').slice(0, -1).join('.');
    },

    appendFile(file,data){
        data = "\n"+data
        fs.appendFileSync(file, data, function (err) {
            if (err) throw err;
            console.log(`File ${file} appended.`);
        });
    }  
}