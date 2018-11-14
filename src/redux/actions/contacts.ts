
import * as consts from 'src/redux/consts/index';
import { IAction } from 'src/redux/types/IAction';
import { IUser } from '../../models/interfaces/IUser';
   
const getConactsStart = (userId: number):GetContactsStart => ({
    type: consts.GET_CONTACTS_START,
    payload: {userId: userId}
});

const getConactsEnd = (contacts: Array<IUser>):GetContactsEnd => ({
    type: consts.GET_CONTACTS_END,
    payload: {contacts: contacts}
});
     
type GetContactsStart = IAction<'FC_GET_CONTACTS_START'>;
type GetContactsEnd = IAction<'FC_GET_CONTACTS_END', {contacts: Array<IUser>}>;
type Actions = GetContactsStart | GetContactsEnd ;

export {
    getConactsStart,
    getConactsEnd,
    GetContactsStart,
    GetContactsEnd,
    Actions 
}