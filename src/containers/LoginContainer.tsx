import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {IAppState} from 'src/redux/state/index';
import * as actions from 'src/redux/actions/index';
import { Actions } from 'src/redux/types/Actions';
import {LoginForm}  from 'src/components/LoginForm';

class LoginContainer extends React.Component<ILoginContainerProps,ILoginContainerState>
{
    public static defaultProps = {
    }

    constructor(props: ILoginContainerProps){
        super(props);
    }

    private onValueChange(property: string, e:any){
        this.setState<any>({[property]: e.target.value});
    }
 
    private onLoginButtonClick(){
        this.props.getToken(this.state.email,this.state.password);
    }

    public render() {
        return (<LoginForm onLoginButtonClick = {this.onLoginButtonClick.bind(this)} onValueChange = {this.onValueChange.bind(this)}/>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions> ): ILoginContainerDispatchProps  => { 
    return {
        getToken: (email: string,password:string)  => dispatch(actions.getTokenStart(email,password))
    }
}
    
const mapStateToProps = (state: IAppState): ILoginContainerStateProps => ({
    isLoadingToken: state.account.isLoadingToken
});

const LoginContainerConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);  

interface ILoginContainerProps extends ILoginContainerStateProps, ILoginContainerDispatchProps{
   
}

interface ILoginContainerStateProps{
    isLoadingToken: boolean
}

interface ILoginContainerDispatchProps{
    getToken: typeof actions.getTokenStart
}

interface ILoginContainerState {
    email: string,
    password: string
}

export {
    ILoginContainerState,
    ILoginContainerDispatchProps,
    ILoginContainerStateProps,
    ILoginContainerProps,
    LoginContainerConnected,
    LoginContainer
}
