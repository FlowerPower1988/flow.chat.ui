
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IAccountState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions';
import { persistToken, isAccountAuthenticated, readPersistedToken, removeToken } from 'src/utils/managers/tokenManager';
import { createConnection } from 'src/utils/managers/Connection';
const initialState: IAccountState = {
  isLoadingToken: false,
  isLoggedIn: isAccountAuthenticated()
};

const accountReducer: Reducer<IAccountState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.GET_TOKEN_START:
      return { ...state, isLoadingToken: true };
    case consts.GET_TOKEN_END:
      let isTokenRetrieved = action.payload ? (action.payload.token ? true: false) : false
      isTokenRetrieved ? persistToken(action.payload!.token):()=>{};
      return { ...state, isLoadingToken: false};
    case consts.TRY_SIGN_IN:
      const isAuthenticated = isAccountAuthenticated();
      if(isAuthenticated){
        createConnection('https://localhost:44389/UsersHub',readPersistedToken()!,'UsersHub');
      }    
      return { ...state, isLoggedIn: isAuthenticated};
    case consts.SIGN_OUT:
       removeToken();
       return { ...state, isLoggedIn: false};
    default:
      return state;
  }
}

export { accountReducer as account }
