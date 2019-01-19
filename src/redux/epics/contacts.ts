

import { Actions ,} from '../types/Actions';
import * as actionsTypes  from '../consts/actions';
import { getConactsEnd,GetContactsStart } from '../actions/index';
import { ActionsObservable,ofType } from 'redux-observable';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { mergeMap, map, catchError  } from 'rxjs/operators';
import { get } from 'src/utils/api';


function getContacts(action$: ActionsObservable<Actions>) : Observable<Action>  {
  return action$.pipe(
    ofType(actionsTypes.GET_CONTACTS_START),
    mergeMap<GetContactsStart,any>(
      action  => get(`users/${action.payload !== undefined ?action.payload.userId :""}/contacts`,(result)=>
      getConactsEnd(result.response))
     ))
}
    
export {getContacts};