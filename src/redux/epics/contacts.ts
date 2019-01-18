
import { Actions ,} from '../types/Actions';
import * as actionsTypes  from '../consts/actions';
import { getConactsEnd,GetContactsStart } from '../actions/index';
import { ActionsObservable,ofType } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { mergeMap, map, catchError  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

function getContacts(action$: ActionsObservable<Actions>) : Observable<Action>  {
  return action$.pipe(
    ofType(actionsTypes.GET_CONTACTS_START),
    mergeMap<GetContactsStart,any>(
      action  => 
      ajax.getJSON(`https://localhost:44389/users/${action.payload !== undefined ?action.payload.userId :""}/contacts`).pipe(
        map<any,any>(
          response => 
            getConactsEnd(response)),
        catchError(
          map(
            error => console.log('error: ', error)))
        )))
}
    
export {getContacts};