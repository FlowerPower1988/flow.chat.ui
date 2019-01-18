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
     
type GetTokenStart = IAction<'FC_GET_TOKEN_START',{email: string,password: string}>;
type GetTokenEnd = IAction<'FC_GET_TOKEN_END',{token: string}>;
type GetAppUserStartAction = IAction<'FC_GET_APP_USER_START'>;
type GetAppUserEndAction = IAction<'FC_GET_APP_USER_END'>;
type AccountActions = GetTokenStart | GetTokenEnd | GetAppUserStartAction | GetAppUserEndAction;


export {
    getAppUserStart,
    getAppUserEnd,
    getTokenStart,
    getTokenEnd,
    GetTokenStart,
    GetTokenEnd,
    AccountActions 
}