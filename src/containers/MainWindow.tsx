
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainWindow as MainWindowComponent } from 'src/components/index';
import {IAppState} from 'src/redux/state/index';
import * as actions from 'src/redux/actions/index';
import { Actions } from 'src/redux/types/Actions';

class MainWindow extends React.Component<IProps,IState>
{
    public static defaultProps = {
        isExpanded: false
    }

    constructor(props: IProps){
        super(props);
        this.state = {isExpanded: false};
    }

    public render() {
        return (
            <MainWindowComponent isExpanded={this.props.isExpanded} onExpanButtonClick = {this.props.toggleExpand} />
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions> ): IDispatchProps  => { 
    return {
        toggleExpand: ()  => dispatch(actions.toggleMainWindow()) 
    }
}
    
const mapStateToProps = (state: IAppState): IStateProps => ({
    isExpanded: state.mainWindow.isExpanded
});

const MainWindowConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainWindow);  

interface IProps extends IStateProps, IDispatchProps{
}

interface IStateProps{
    isExpanded: boolean
}

interface IDispatchProps{
    toggleExpand: typeof actions.toggleMainWindow;
}

interface IState {
    isExpanded: boolean
}

export {
    IProps,
    IStateProps,
    IDispatchProps,
    MainWindow,
    MainWindowConnected
}
