
import { UserStatus } from '../enums/index';

export  interface IUser {
    login: string,
    id: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    status: UserStatus
};


