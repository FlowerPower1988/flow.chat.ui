const fs = require('fs');
const utils = require('./utils');
require('./consts');


module.exports = {
    create(name){
        createContainer(name);
    }
};

function createContainer(name){
    name = utils.firstLetterToUpperCase(name);
    const connectedName = name + ConnectedSufix;

    const exportName = name + ContainerSufix;
    const exportConnectedName = exportName + ConnectedSufix
    const file = `${ContainersDir}/${name}`;

//import I${name}${storeStateSuffix} from './I${name}${storeStateSuffix}';
    const fileContent = `
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {${name + ComponentSufix}} from '${utils.removeExtension(ComponentsIndexFile)}';
import {IAppStoreState} from '${utils.removeExtension(StateIndexFile)}';
import * as actions from '${utils.removeExtension(ActionsIndexFile)}';


class ${name} extends React.Component<IProps,IState>
{
    public static defaultProps = {
        isSample: false
    }

    constructor(props: IProps){
        super(props);
        this.state = {isSample: false};
    }

    public render() {
        return (
        <${name + ComponentSufix} isSample={this.props.isSample} />
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.${name}Actions> ): IDispatchProps  => { 
    return {
        sampleAction: ()  => dispatch(actions.${utils.firstLetterToLowerCase(name) + ActionSufix}()) 
    }
}
    
const mapStateToProps = (state: IAppStoreState): IStateProps => ({
    isSample: state.${utils.firstLetterToLowerCase(name)}.isSample
});

const ${connectedName} = connect(
    mapStateToProps,
    mapDispatchToProps
)(${name});  

interface IProps extends IStateProps, IDispatchProps{
}

interface IStateProps{
    isSample: boolean,
}

interface IDispatchProps{
    sampleAction: typeof actions.${utils.firstLetterToLowerCase(name) + ActionSufix};
}

interface IState {
    isSample: boolean
}

export {
    ${name} as ${exportName},
    ${connectedName} as ${exportConnectedName}
}
`;

    utils.createFile(`${file}.tsx`,fileContent);
    appendIndex(file);
}

function appendIndex(componentFile){
    const expportString = `export * from '${componentFile}'`;
    utils.appendFile(ContainersIndexFile,expportString)
}


