
import { Actions ,} from '../types/Actions';
import * as actionsTypes  from '../consts/actions';
import { getTokenEnd, GetTokenStart } from '../actions/index';
import { ActionsObservable,ofType } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { mergeMap, map, catchError  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

function getToken(action$: ActionsObservable<Actions>) : Observable<Action>  {
  return action$.pipe(
    ofType(actionsTypes.GET_TOKEN_START),
    mergeMap<GetTokenStart,any>(
      action  => 
      ajax.post(`https://localhost:44389/accounts/tokens` ,{email: action.payload!.email, password: action.payload!.password },{'Content-Type':'application/json'}).pipe(
        map<any,any>(
          result => 
            getTokenEnd(result.response.token)),
        catchError(
          map(
            error => console.log('error: ', error)))
        )))
}
    
export {getToken};