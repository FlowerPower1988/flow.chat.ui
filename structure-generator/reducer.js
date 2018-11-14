const fs = require('fs');
const utils = require('./utils');
require('./consts');


module.exports = {
    create(name){
        createReducer(name);
    }
};

function createReducer(name){
    name = utils.firstLetterToLowerCase(name);
    const exportName = name + ReducerSufix;
    const file = `${ReducersDir}/${name}`;
    
      const fileContent = `
import { Reducer } from 'redux';
import * as consts from '${utils.removeExtension(ReduxConstsindexFile)}';
import { I${utils.firstLetterToUpperCase(name) + StoreStateSufix} } from '${utils.removeExtension(StateIndexFile)}';
import { Actions } from '${utils.removeExtension(ActionsFile)}'

const initialState: I${utils.firstLetterToUpperCase(name) + StoreStateSufix} = {
  isSample: false
};

const ${name}: Reducer<I${name}${StoreStateSufix}> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.${name.toUpperCase()}_SAMPLE_ACTION:
      return { ...state, isSample: !state.isSample };
    default:
      return state;
  }
}

export {${name} as ${exportName + ReducerSufix}}
`;
        
      

    utils.createFile(`${file}.ts`,fileContent);
    appendIndex(file);
}

function appendIndex(file){
    const exportString = `export * from '${file}'`;
    utils.appendFile(ReducersIndexFile,exportString)
}


