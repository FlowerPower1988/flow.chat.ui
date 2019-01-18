
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
      ajax.get(`https://localhost:44389/accounts/` ,{password: action.payload!.password, email: action.payload!.email}).pipe(
        map<any,any>(
          response => 
            getTokenEnd(response)),
        catchError(
          map(
            error => console.log('error: ', error)))
        )))
}
    
export {getToken};