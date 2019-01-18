
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IContactsState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions'

const initialState: IContactsState = {
  isLoadingContacts: false,
  contacts: []
};

const contactsReducer: Reducer<IContactsState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.GET_CONTACTS_START:
      return { ...state, isLoadingContacts: true };
    case consts.GET_CONTACTS_END:
      return { ...state, isLoadingContacts: false, contacts: action.payload!.contacts };
    default:
      return state;
  }
}

export { contactsReducer as contacts}
