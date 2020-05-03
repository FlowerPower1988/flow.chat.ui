import * as consts from 'src/redux/consts/index';
import { IAction } from 'src/redux/types/IAction';

const getTokenStart = (email: string,password: string):GetTokenStart => ({
    type: consts.GET_TOKEN_START,
    payload: {email: email,password:password}
});

const getTokenEnd = (token: string):GetTokenEnd => ({
    type: consts.GET_TOKEN_END,
    payload: {token: token}
});

const getAppUserStart = ():GetAppUserStartAction => ({
    type: consts.GET_APP_USER_START
});

const getAppUserEnd = ():GetAppUserEndAction => ({
    type: consts.GET_APP_USER_END
});

const trySignIn = ():SignInAction => ({
    type: consts.TRY_SIGN_IN
});

const signOut = ():SignOutAction => ({
    type: consts.SIGN_OUT
});
     
type GetTokenStart = IAction<'FC_GET_TOKEN_START',{email: string,password: string}>;
type GetTokenEnd = IAction<'FC_GET_TOKEN_END',{token: string}>;
type GetAppUserStartAction = IAction<'FC_GET_APP_USER_START'>;
type GetAppUserEndAction = IAction<'FC_GET_APP_USER_END'>;
type SignInAction = IAction<'FC_TRY_SIGN_IN'>;
type SignOutAction = IAction<'FC_SIGN_OUT'>;
type AccountActions = GetTokenStart | GetTokenEnd | GetAppUserStartAction | GetAppUserEndAction | SignInAction | SignOutAction;


export {
    getAppUserStart,
    getAppUserEnd,
    getTokenStart,
    getTokenEnd,
    GetTokenStart,
    GetTokenEnd,
    AccountActions,
    trySignIn,
    signOut
}