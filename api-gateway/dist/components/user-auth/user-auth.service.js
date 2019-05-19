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
var _a, _b;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const common_2 = require("@astra/common");
const services_1 = require("@astra/common/services");
const jwt_1 = require("@nestjs/jwt");
const helpers_1 = require("@astra/common/helpers");
const refresh_tokens_service_1 = require("../refresh-tokens/refresh-tokens.service");
let UserAuthService = class UserAuthService {
    constructor(hashService, jwtService, refreshTokensService) {
        this.hashService = hashService;
        this.jwtService = jwtService;
        this.refreshTokensService = refreshTokensService;
    }
    login(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersClient.send({ cmd: common_2.CommunicationCodes.GET_USER_BY_EMAIL }, { email: dto.email })
                .toPromise();
            if (!user) {
                throw new microservices_1.RpcException(common_2.Messages.USER_NOT_FOUND);
            }
            if (!user.password) {
                throw new microservices_1.RpcException(common_2.Messages.USER_DOESNT_HAVE_PASSWORD);
            }
            if (!(yield this.hashService.compareHash(dto.password, user.password))) {
                throw new microservices_1.RpcException(common_2.Messages.WRONG_PASSWORD);
            }
            return this.generateTokens(user);
        });
    }
    loginByGoogle(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersClient.send({ cmd: common_2.CommunicationCodes.GET_USER_BY_GOOGLE_ID }, { googleId: dto.googleId })
                .toPromise();
            if (!user) {
                throw new microservices_1.RpcException(common_2.Messages.USER_NOT_FOUND);
            }
            return this.generateTokens(user);
        });
    }
    generateTokens(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = this.jwtService.sign({ id: user.id, email: user.email });
            const refreshToken = yield this.refreshTokensService.createOne({ accessToken, userId: user.id });
            return {
                accessToken,
                refreshToken: refreshToken.token,
                expiresIn: common_2.JWT_EXPIRES,
            };
        });
    }
    exchangeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshTokenRecord = yield this.refreshTokensService.findOneByToken(refreshToken);
            if (!refreshTokenRecord) {
                throw new microservices_1.RpcException(common_2.Messages.INVALID_REFRESH_TOKEN);
            }
            const user = yield this.usersClient
                .send({ cmd: common_2.CommunicationCodes.GET_USER }, { id: refreshTokenRecord.userId })
                .toPromise();
            if (!user) {
                throw new microservices_1.RpcException(common_2.Messages.USER_NOT_FOUND);
            }
            const accessToken = this.jwtService.sign({ id: user.id, email: user.email });
            return {
                accessToken,
                refreshToken,
                expiresIn: common_2.JWT_EXPIRES,
            };
        });
    }
};
__decorate([
    microservices_1.Client(helpers_1.createClientOptions(common_2.Queues.USERS_SERVICE)),
    __metadata("design:type", microservices_1.ClientProxy)
], UserAuthService.prototype, "usersClient", void 0);
UserAuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.HashService !== "undefined" && services_1.HashService) === "function" && _a || Object, jwt_1.JwtService, typeof (_b = typeof refresh_tokens_service_1.RefreshTokensService !== "undefined" && refresh_tokens_service_1.RefreshTokensService) === "function" && _b || Object])
], UserAuthService);
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user-auth.service.js.map