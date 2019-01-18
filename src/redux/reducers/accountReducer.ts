
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IAccountState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions'

const initialState: IAccountState = {
  isLoadingToken: false,
  isLoggedIn: false,
  token:""
};

const accountReducer: Reducer<IAccountState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.GET_TOKEN_START:
      return { ...state, isLoadingToken: true };
    case consts.GET_TOKEN_END:
      return { ...state, isLoadingToken: false, token: action.payload!.token };
    default:
      return state;
  }
}

export { accountReducer as account }
