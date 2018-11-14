
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {IAppState} from 'src/redux/state/index';
import * as actions from 'src/redux/actions/index';
import { Actions } from 'src/redux/types/Actions';
import { ContactsList  as ContactsListComponent, IProps as ContactsListComponentProps} from '../components/ContactsList';
import {IUser, IMainUser} from '../models/interfaces/index';

class ContactsList extends React.Component<IProps,IState>
{
    public static defaultProps = {
    }

    constructor(props: IProps){
        super(props);
    }

    private getAlias(user: IUser): string{
        let result = user.firstName || ""  + " " + user.lastName || "";
        if(result.trim().length === 0){
            result = user.login
        }
        return result;
    }

    public render() {
        const props: ContactsListComponentProps = {
            itemsProps: this.props.contacts.map(user => ({
                displayedAlias: this.getAlias(user),
                contactId: user.id,
                onIemDoubleClick: () => this.props.startConversation(this.props.mainUser!,user)
            }))
        };
        
        if(this.props.mainUser && this.props.contacts){
            return (
                <ContactsListComponent {...props} />       
            );
        }
        else {
            return(<div>Loading...</div>)
        }
     
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Actions> ): IDispatchProps  => { 
    return {
        startConversation: (mainUser: IMainUser, recipent: IUser)  => dispatch(actions.startConversation(mainUser, recipent)),
        getConacts: (userId: number)  => dispatch(actions.getConactsStart(userId))
    }
}
    
const mapStateToProps = (state: IAppState): IStateProps => ({
    contacts: state.contacts.contacts,
    mainUser: state.mainUser.userData
});

const ContactsListConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsList);  

interface IProps extends IStateProps, IDispatchProps{
   
}

interface IStateProps{
    contacts: Array<IUser>,
    mainUser?: IMainUser 
}

interface IDispatchProps{
    getConacts: typeof actions.getConactsStart
    startConversation: typeof actions.startConversation
}

interface IState {
}

export {
    IState,
    IDispatchProps,
    IStateProps,
    IProps,
    ContactsListConnected,
    ContactsList
}
