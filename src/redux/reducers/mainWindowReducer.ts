
import { Reducer } from 'redux';
import * as consts from 'src/redux/consts/index';
import { IMainWindowState } from 'src/redux/state/index';
import { Actions } from 'src/redux/types/Actions'

const initialState: IMainWindowState = {
  isExpanded: false
};

const mainWindowReducer: Reducer<IMainWindowState> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case consts.TOGGLE_MAIN_WINDOW:
      return { ...state, isExpanded: !state.isExpanded };
    default:
      return state;
  }
}

export { mainWindowReducer as mainWindow}
