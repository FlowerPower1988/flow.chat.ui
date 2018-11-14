const fs = require('fs');
const utils = require('./utils');
require('./consts');

const actionContent = `
export interface IAction<K extends string, P = {}> {
  type: K;
  payload?: P;
}`

const appStateFileContent = `
import * as states from '${utils.removeExtension(StateIndexFile)}';
interface IApp {
}

export {IApp as IApp${StoreStateSufix}};
`

const actionsContent = `
import * as actions from '${utils.removeExtension(ActionsIndexFile)}';
export type Actions = `

const reduxTypesIndexFileContent =`
export * from '${utils.removeExtension(ActionDir)}';
export * from '${utils.removeExtension(ActionsFile)}';
`
module.exports = {
  create(){
    // Folders
    utils.createFolder(ReduxDir);
    utils.createFolder(ActionsDir);
    utils.createFolder(ComponentsDir);
    utils.createFolder(ContainersDir);
    utils.createFolder(ReducersDir);
    utils.createFolder(StateDir);
    utils.createFolder(ReduxTypesDir);
    utils.createFolder(ReduxConstsDir);
    // utils.createFolder(ComponentsTypesDir);
    // Files
    // utils.createFile(ComponentsTypesIndexDir);

    utils.createFile(StateIndexFile,`export * from '${utils.removeExtension(AppStateFile)}';`);
    utils.createFile(AppStateFile,appStateFileContent);
    utils.createFile(ActionsFile,actionsContent);
    utils.createFile(ReduxTypesIndexFile,reduxTypesIndexFileContent);
    utils.createFile(ActionDir,actionContent);
    utils.createFile(ComponentsIndexFile);
    utils.createFile(ContainersIndexFile);
    utils.createFile(ReduxIndexFile);
    utils.createFile(ActionsIndexFile);
    utils.createFile(ReducersIndexFile);
    utils.createFile(ReduxConstsActionsFile);
    utils.createFile(ReduxConstsindexFile,`export * from '${utils.removeExtension(ReduxConstsActionsFile)}';`);

    utils.appendFile(ActionsIndexFile,`export * from '${utils.removeExtension(ActionDir)}';` )
    // utils.createFile(SrcIndexFile);
  }
}

 