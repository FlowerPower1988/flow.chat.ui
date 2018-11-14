const fs = require('fs');
const utils = require('./utils');
require('./consts');


module.exports = {
    create(name){
        createComponent(name);
    }
};

function createComponent(name){
    const componentName = utils.firstLetterToUpperCase(name);
    const exportName = componentName + ComponentSufix;
    const componentFile = `${ComponentsDir}/${componentName}`;

    const fileContent = `
import * as React from 'react';
    
const ${componentName} = (props: IProps) => {
    return(
        <div/>
    )
}

interface IProps {
    isSample: boolean
}

export {
    IProps as I${exportName}Props,
    ${componentName} as ${exportName}
}`;

    utils.createFile(`${componentFile}.tsx`,fileContent);
    appendIndex(componentFile);
}

function appendIndex(componentFile){
    const expportString = `export * from '${componentFile}';`;
    utils.appendFile(ComponentsIndexFile,expportString)
}
