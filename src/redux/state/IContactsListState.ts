
import {IUser} from '../../models/interfaces/index';

export interface IContactsState {
    isLoadingContacts: boolean
    contacts: Array<IUser>
};

