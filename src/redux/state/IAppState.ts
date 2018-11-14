
import * as states from 'src/redux/state/index';
export interface IAppState {
    mainWindow: states.IMainWindowState,
    contacts: states.IContactsState,
    conversations: states.IConversationsState,
    mainUser: states.IMainUserStoreState
}
