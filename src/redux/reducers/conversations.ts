
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IConversationsState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions'

const initialState: IConversationsState = {
  isSample: false
};

const conversations: Reducer<IConversationsState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.START_CONVERSATION:
      return { ...state, isSample: !state.isSample };
    default:
      return state;
  }
}

export { conversations }
