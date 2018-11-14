
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IMainUserStoreState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions'

const initialState: IMainUserStoreState = {
  isDataLoading: false
};

const mainUser: Reducer<IMainUserStoreState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.GET_USER_START:
      return { ...state, isDataLoading: true };
    case consts.GET_USER_END:
      return { ...state, isDataLoading: false };
    default:
      return state;
  }
}

export { mainUser }
