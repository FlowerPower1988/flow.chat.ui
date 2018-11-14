// node structure-generator/create.js ContactsList src/flow-communicator/contacts-list/
const fs = require('fs');
const component = require('./component');
const reducer = require('./reducer');
const container = require('./container');
const action = require('./action');
const state = require('./state');
const projectStructure = require('./projectStructure.js');

const [,, ...args] = process.argv;
const nameArg = args[0];
const srcDir ="src";


projectStructure.create(srcDir);
component.create(nameArg);
container.create(nameArg);
action.create(nameArg);
state.create(nameArg);
reducer.create(nameArg);
