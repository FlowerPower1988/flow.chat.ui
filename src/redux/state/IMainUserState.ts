import '../../models/index';
import { IUser } from '../../models/index';

export interface IMainUserStoreState {
    userData?: IUser,
    isDataLoading: boolean
};