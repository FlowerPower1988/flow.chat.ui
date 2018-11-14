
import * as consts from 'src/redux/consts/index';
import {IAction} from 'src/redux/types/IAction';

type GetUserStartAction = IAction<'FC_GET_USER_START'>;
type GetUserEndAction = IAction<'FC_GET_USER_END'>;
type Actions = GetUserStartAction | GetUserEndAction;
    
const getUserStart = ():GetUserStartAction => ({
    type: consts.GET_USER_START
});

const getUserEnd = ():GetUserEndAction => ({
    type: consts.GET_USER_END
});
    
export {
    getUserStart,
    getUserEnd,
    GetUserStartAction,
    GetUserEndAction,
    Actions
}