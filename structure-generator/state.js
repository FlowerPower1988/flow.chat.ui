const fs = require('fs');
const utils = require('./utils');
require('./consts');


module.exports = {
    create(name){
        createComponent(name);
    }
};

function createComponent(name){
    name = utils.firstLetterToUpperCase(name);
    const exportName = 'I' + name + StoreStateSufix;
    const file = `${StateDir}/I${name}`;

    const fileContent = `
interface I${name} {
    isSample: boolean
};

export {
    I${name} as ${exportName}
}`;

    utils.createFile(`${file}.ts`,fileContent);
    appendIndex(file);
    addToAppState(`    ${utils.firstLetterToLowerCase(name)}: states.${exportName}`);
}

function appendIndex(file){
    const expportString = `export * from '${file}';`;
    utils.appendFile(StateIndexFile,expportString)
}

function addToAppState(addition,src){
    let str = fs.readFileSync(AppStateFile, 'utf8');
    let pos = str.indexOf("{") + 1;


    str = [str.slice(0, pos), "\n"+addition+",", str.slice(pos)].join('');
    fs.writeFileSync(AppStateFile, str, 'utf8');
}
