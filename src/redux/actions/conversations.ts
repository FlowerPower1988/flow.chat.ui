
import * as consts from 'src/redux/consts/index';
import {IAction} from 'src/redux/types/IAction';
import {IUser, IMainUser} from '../../models/interfaces/index';


type StartConversationAction = IAction<'FC_START_CONVERSATION',{mainUser: IMainUser, recipent: IUser}>;
type Actions = StartConversationAction;
    
const startConversation = (mainUser: IMainUser, recipent: IUser):StartConversationAction => ({
    type: consts.START_CONVERSATION,
    payload: {
        mainUser: mainUser,
        recipent: recipent
    }
});
    
export {
    startConversation,
    StartConversationAction,
    Actions
}