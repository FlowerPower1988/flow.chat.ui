
import * as consts from 'src/redux/consts/index';
import {IAction} from 'src/redux/types/IAction';
import {IContact, IUser} from '../../models/interfaces/index';


type StartConversationAction = IAction<'FC_START_CONVERSATION',{mainUser: IUser, recipent: IContact}>;
type ConversationsActions = StartConversationAction;
    
const startConversation = (mainUser: IUser, recipent: IContact):StartConversationAction => ({
    type: consts.START_CONVERSATION,
    payload: {
        mainUser: mainUser,
        recipent: recipent
    }
});
    
export {
    startConversation,
    StartConversationAction,
    ConversationsActions
}