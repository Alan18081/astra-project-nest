import {UserInfo} from './user-info';
import {Address} from './address';


export class UserEntity {
    private _userInfo: UserInfo;
    private _address: Address;

    public changeEmail(email: string) {
        this._userInfo.email = email;
    }
}