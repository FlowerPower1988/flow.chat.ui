import '../../models/index';
import { IMainUser } from '../../models/index';

export interface IMainUserStoreState {
    userData?: IMainUser,
    isDataLoading: boolean
};