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
var _a, _b, _c;
const common_1 = require("@nestjs/common");
const user_auth_service_1 = require("./user-auth.service");
const microservices_1 = require("@nestjs/microservices");
const dto_1 = require("@astra/common/dto");
let UserAuthController = class UserAuthController {
    constructor(usersAuthService) {
        this.usersAuthService = usersAuthService;
    }
    login(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersAuthService.login(dto);
        });
    }
    loginByGoogle(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersAuthService.loginByGoogle(dto);
        });
    }
    exchangeToken(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersAuthService.exchangeToken(dto.refreshToken);
        });
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: CommunicationCodes.LOGIN }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof dto_1.LoginDto !== "undefined" && dto_1.LoginDto) === "function" && _a || Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "login", null);
__decorate([
    microservices_1.MessagePattern({ cmd: CommunicationCodes.LOGIN_BY_GOOGLE }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.LoginByGoogleDto !== "undefined" && dto_1.LoginByGoogleDto) === "function" && _b || Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "loginByGoogle", null);
__decorate([
    microservices_1.MessagePattern({ cmd: CommunicationCodes.EXCHANGE_TOKEN }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.ExchangeTokenDto !== "undefined" && dto_1.ExchangeTokenDto) === "function" && _c || Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "exchangeToken", null);
UserAuthController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [user_auth_service_1.UserAuthService])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user-auth.controller.js.map