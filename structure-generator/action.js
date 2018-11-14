const fs = require('fs');
const utils = require('./utils');
require('./consts');


module.exports = {
    create(name){
        createActions(name);
    }
};

function createActions(name){
    name = utils.firstLetterToLowerCase(name);
    appendConsts(name);
    const file = `${ActionsDir}/${name}`;
    const str1 = utils.firstLetterToUpperCase(name) + ActionSufix

    const fileContent = `
import * as consts from '${utils.removeExtension(ReduxConstsindexFile)}';
import {IAction} from '${utils.removeExtension(ActionDir)}';

type ${str1} = IAction<'${name.toUpperCase()}_SAMPLE_ACTION'>;
type Actions = ${str1};
    
const ${name + ActionSufix} = ():${str1} => ({
    type: consts.${name.toUpperCase()}_SAMPLE_ACTION
});
    
export {
    ${name + ActionSufix},
    ${str1},
    Actions as ${utils.firstLetterToUpperCase(name)}Actions
}`;

    utils.createFile(`${file}.ts`,fileContent);
    appendIndex(file);
    appendActions(utils.firstLetterToUpperCase(name)+"Actions");
 

}

function appendIndex(file){
    const expportString = `export * from '${file}';`;
    utils.appendFile(ActionsIndexFile,expportString)
}


function appendConsts(name){
    const expportString = `export const ${name.toUpperCase()}_SAMPLE_ACTION = '${name.toUpperCase()}_SAMPLE_ACTION';`;
    utils.appendFile(ReduxConstsActionsFile,expportString)
}

function appendActions(txt){
    let str = fs.readFileSync(ActionsFile, 'utf8').trim();
    let lastChar = str.substr(str.length - 1); 
    //let pos = str.indexOf('|');
    data = ` ${ lastChar === '='? '':'|'} actions.${txt}`
    fs.appendFileSync(ActionsFile, data, function (err) {
        if (err) throw err;
        console.log(`File ${file} appended.`);
    });
}
