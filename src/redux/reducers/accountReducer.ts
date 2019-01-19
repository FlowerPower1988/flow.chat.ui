
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IAccountState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions';
import { isLoggedIn } from 'src/utils/auth';

const initialState: IAccountState = {
  isLoadingToken: false,
  isLoggedIn: isLoggedIn()
};

const accountReducer: Reducer<IAccountState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.GET_TOKEN_START:
      return { ...state, isLoadingToken: true };
    case consts.GET_TOKEN_END:
      let isTokenRetrieved = action.payload!.token ? true: false
      isTokenRetrieved ? localStorage.setItem('FC_TOKEN', action.payload!.token):()=>{};
      return { ...state, isLoadingToken: false,isLoggedIn: isTokenRetrieved};
    default:
      return state;
  }
}

export { accountReducer as account }
