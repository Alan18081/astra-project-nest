import {InvalidAgeException} from './exceptions/invalid-age-exception';

export class UserInfo {

    constructor(
        private _firstName: string,
        private _lastName: string,
        private _age: number,
        private _email: string,
    ) {
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get age(): number {
        return this._age;
    }


    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set age(value: number) {
        if(value < 0) {
            throw new InvalidAgeException('Age cannot be negative');
        }
        this._age = value;
    }
}