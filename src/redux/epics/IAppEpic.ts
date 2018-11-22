import { Epic } from "redux-observable";
import { Actions } from '../types/Actions';
import { IAppState } from '../state/IAppState';
//import { IAjaxClient } from "./app/common/http-interceptors/ajax-client";

interface IAppEpic extends Epic<Actions, any ,IAppState, any> {}

export { IAppEpic }