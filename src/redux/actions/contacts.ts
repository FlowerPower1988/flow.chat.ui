
import * as consts from 'src/redux/consts/index';
import { IAction } from 'src/redux/types/IAction';
import { IContact } from '../../models/interfaces/IContact';
   
const getConactsStart = (userId: number):GetContactsStart => ({
    type: consts.GET_CONTACTS_START,
    payload: {userId: userId}
});

const getConactsEnd = (contacts: Array<IContact>):GetContactsEnd => ({
    type: consts.GET_CONTACTS_END,
    payload: {contacts: contacts}
});
     
type GetContactsStart = IAction<'FC_GET_CONTACTS_START',{userId: number}>;
type GetContactsEnd = IAction<'FC_GET_CONTACTS_END', {contacts: Array<IContact>}>;
type ContactsActions = GetContactsStart | GetContactsEnd ;

export {
    getConactsStart,
    getConactsEnd,
    GetContactsStart,
    GetContactsEnd,
    ContactsActions 
}