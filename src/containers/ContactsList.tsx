
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {IAppState} from 'src/redux/state/index';
import * as actions from 'src/redux/actions/index';
import { Actions } from 'src/redux/types/Actions';
import { ContactsList  as ContactsListComponent, IProps as ContactsListComponentProps} from '../components/ContactsList';
import {IContact, IUser} from '../models/interfaces/index';

class ContactsList extends React.Component<IProps,IState>
{
    public static defaultProps = {
    }

    constructor(props: IProps){
        super(props);
    }

    private getAlias(user: IContact): string{
        let result = user.firstName || ""  && " " && user.lastName || "";
        if(result.trim().length === 0){
            result = user.login
        }
        return result;
    }

    componentDidMount(){
        this.props.getConacts(5);
    }

    public render() {
        const props: ContactsListComponentProps = {
            itemsProps: this.props.contacts.map(user => ({
                displayedAlias: this.getAlias(user),
                contactId: user.id,
                description: user.description === undefined ? "": user.description,
                onIemDoubleClick: () => this.props.startConversation(this.props.mainUser!,user)
            }))
        };
        
        if(!this.props.isLoadingContacts){
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
        startConversation: (mainUser: IUser, recipent: IContact)  => dispatch(actions.startConversation(mainUser, recipent)),
        getConacts: (userId: number)  => dispatch(actions.getConactsStart(userId))
    }
}
    
const mapStateToProps = (state: IAppState): IStateProps => ({
    contacts: state.contacts.contacts,
    isLoadingContacts: state.contacts.isLoadingContacts,
});

const ContactsListConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsList);  

interface IProps extends IStateProps, IDispatchProps{
   
}

interface IStateProps{
    contacts: Array<IContact>,
    isLoadingContacts: boolean
    mainUser?: IUser 
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
