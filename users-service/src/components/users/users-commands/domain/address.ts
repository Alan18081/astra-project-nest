export class Address {
    constructor(
        private _city: string,
        private _street: string,
        private _house: string,
    ) {}

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get street(): string {
        return this._street;
    }

    set street(value: string) {
        this._street = value;
    }

    get house(): string {
        return this._house;
    }

    set house(value: string) {
        this._house = value;
    }
}