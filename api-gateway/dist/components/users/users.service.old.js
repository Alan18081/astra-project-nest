"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const common_2 = require("@astra/common");
const path_1 = require("path");
let UsersServiceOld = class UsersServiceOld {
    constructor() { }
    findMany(dto) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.GET_USERS_LIST }, dto)
            .toPromise();
    }
    findOne(dto) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.GET_USER }, dto)
            .toPromise();
    }
    findOneByEmail(email) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.GET_USER_BY_EMAIL }, { email })
            .toPromise();
    }
    findOneByGoogleId(googleId) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.GET_USER_BY_GOOGLE_ID }, { googleId })
            .toPromise();
    }
    createOne(dto) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.CREATE_USER }, dto)
            .toPromise();
    }
    createOneByGoogle(dto) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.CREATE_USER_BY_GOOGLE }, dto)
            .toPromise();
    }
    updateOne(dto) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.UPDATE_USER }, dto)
            .toPromise();
    }
    removeOne(dto) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.REMOVE_USER }, dto)
            .toPromise();
    }
    resetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client
                .send({ cmd: common_2.CommunicationCodes.RESET_USER_PASSWORD }, { email })
                .toPromise();
        });
    }
    verifyResetPasswordHash(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client
                .send({ cmd: common_2.CommunicationCodes.VERIFY_RESET_PASSWORD_HASH }, { hash })
                .toPromise();
        });
    }
    setNewPassword({ hash, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client
                .send({ cmd: common_2.CommunicationCodes.SET_NEW_PASSWORD }, { hash, password })
                .toPromise();
        });
    }
    changePassword(userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client
                .send({ cmd: common_2.CommunicationCodes.CHANGE_USER_PASSWORD }, { id: userId, oldPassword, newPassword })
                .toPromise();
        });
    }
};
__decorate([
    microservices_1.Client({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'users',
            protoPath: path_1.join(__dirname, 'proto/users.proto'),
        },
    }),
    __metadata("design:type", typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" && _a || Object)
], UsersServiceOld.prototype, "client", void 0);
UsersServiceOld = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], UsersServiceOld);
exports.UsersServiceOld = UsersServiceOld;
//# sourceMappingURL=users.service.old.js.map