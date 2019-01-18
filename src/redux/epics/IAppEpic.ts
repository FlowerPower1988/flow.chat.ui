import { Epic } from "redux-observable";
import { Actions } from '../types/Actions';
import { IAppState } from '../state/IAppState';
//import { IAjaxClient } from "./app/common/http-interceptors/ajax-client";

interface IAppEpic extends Epic<Actions, Actions ,IAppState, any> {}

export { IAppEpic }




// export declare interface Epic<Input extends Action = any, Output extends Input = Input, State = any, Dependencies = any> {
//     (action$: ActionsObservable<Input>, state$: StateObservable<State>, dependencies: Dependencies): Observable<Output>;
//   }