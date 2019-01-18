
import * as consts from 'src/redux/consts/index';
import {IAction} from 'src/redux/types/IAction';

type ToggleMainWindow = IAction<'FC_TOGGLE_MAIN_WINDOW'>;
type MainWindowActions = ToggleMainWindow;
    
const toggleMainWindow = ():ToggleMainWindow => ({
    type: consts.TOGGLE_MAIN_WINDOW
});
    
export {
    toggleMainWindow,
    ToggleMainWindow,
    MainWindowActions
}