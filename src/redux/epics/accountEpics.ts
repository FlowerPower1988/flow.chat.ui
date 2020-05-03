
import { Actions ,} from '../types/Actions';
import * as actionsTypes  from '../consts/actions';
import { getTokenEnd, GetTokenStart, trySignIn } from '../actions/index';
import { ActionsObservable,ofType } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { post } from 'src/utils/api';

function getToken(action$: ActionsObservable<Actions>) : Observable<Action>  {
  return action$.pipe(
    ofType(actionsTypes.GET_TOKEN_START),
    mergeMap<GetTokenStart,any>(
      action  => post('accounts/tokens',{email: action.payload!.email, password: action.payload!.password },(result)=>
      [getTokenEnd(result.response.token),trySignIn()])
     ))
}
        
export {getToken};