
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IAccountState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions';
import { takeIfExists } from 'src/utils/localStorage'
import { decode } from 'jsonwebtoken';

const initialState: IAccountState = {
  isLoadingToken: false,
  isLoggedIn: takeIfExists('FC_TOKEN') ? true: false
};

const accountReducer: Reducer<IAccountState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.GET_TOKEN_START:
      return { ...state, isLoadingToken: true };
    case consts.GET_TOKEN_END:
      let isLoggedIn = action.payload!.token ? true: false
      isLoggedIn ? localStorage.setItem('FC_TOKEN', action.payload!.token):()=>{};
      let decodedToken =  decode( action.payload!.token);


      return { ...state, isLoadingToken: false,isLoggedIn: isLoggedIn};
    default:
      return state;
  }
}

export { accountReducer as account }
