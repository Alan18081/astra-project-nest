"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUsersClient = {
    send() {
        return {
            toPromise() { },
        };
    },
};
exports.mockJwtService = {
    sign() { },
    decode() { },
};
exports.mockHashService = {
    compareHash() { },
};
exports.mockRefreshTokensService = {
    createOne() { },
    findOneByToken() { }
};
exports.mockUser = {
    id: 20,
    firstName: 'Alan',
    lastName: 'Morgan',
    email: 'gogunov00@gmail.com',
    password: 'hello',
    googledId: 20,
    roleId: 1,
};
//# sourceMappingURL=mocks.js.map