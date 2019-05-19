"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_auth_controller_1 = require("./user-auth.controller");
const user_auth_service_1 = require("./user-auth.service");
const core_module_1 = require("../core/core.module");
const refresh_tokens_module_1 = require("../refresh-tokens/refresh-tokens.module");
const custom_jwt_module_1 = require("../custom-jwt/custom-jwt.module");
let UserAuthModule = class UserAuthModule {
};
UserAuthModule = __decorate([
    common_1.Module({
        imports: [
            custom_jwt_module_1.CustomJwtModule,
            core_module_1.CoreModule,
            refresh_tokens_module_1.RefreshTokensModule,
        ],
        controllers: [user_auth_controller_1.UserAuthController],
        providers: [user_auth_service_1.UserAuthService],
    })
], UserAuthModule);
exports.UserAuthModule = UserAuthModule;
//# sourceMappingURL=user-auth.module.js.map