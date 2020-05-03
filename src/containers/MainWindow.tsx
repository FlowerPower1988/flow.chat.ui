
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainWindow as MainWindowComponent } from 'src/components/index';
import {IAppState} from 'src/redux/state/index';
import * as actions from 'src/redux/actions/index';
import { Actions } from 'src/redux/types/Actions';
import { ContactsListConnected } from '../containers/ContactsList';
import { LoginContainerConnected } from '../containers/LoginContainer';
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
        
        let content;
        if (this.props.isUserLoggedIn) {
            content = <ContactsListConnected/>;
          } else {
            content = <LoginContainerConnected />;
          }


        return (
            <MainWindowComponent 
                isExpanded={this.props.isExpanded} 
                onExpanButtonClick = {this.props.toggleExpand} 
                onLogoutButtonClick = {this.props.signOut} 
                content = {content}
                />
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions> ): IDispatchProps  => { 
    return {
        toggleExpand: ()  => dispatch(actions.toggleMainWindow()),
        signOut:() => dispatch(actions.signOut()) 
    }
}
    
const mapStateToProps = (state: IAppState): IStateProps => ({
    isExpanded: state.mainWindow.isExpanded,
    isUserLoggedIn: state.account.isLoggedIn,
});

const MainWindowConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainWindow);  

interface IProps extends IStateProps, IDispatchProps{
}

interface IStateProps{
    isExpanded: boolean
    isUserLoggedIn: boolean
}

interface IDispatchProps{
    toggleExpand: typeof actions.toggleMainWindow;
    signOut: typeof actions.signOut;
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
