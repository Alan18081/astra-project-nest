"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const services_1 = require("@store/common/services");
const jwt_1 = require("@nestjs/jwt");
const core_module_1 = require("../core/core.module");
let CustomJwtModule = class CustomJwtModule {
};
CustomJwtModule = __decorate([
    common_1.Module({
        imports: [
            core_module_1.CoreModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => ({
                    secretOrPrivateKey: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: +configService.get('JWT_EXPIRES'),
                    },
                }),
                inject: [services_1.ConfigService]
            }),
        ],
        exports: [jwt_1.JwtModule]
    })
], CustomJwtModule);
exports.CustomJwtModule = CustomJwtModule;
//# sourceMappingURL=custom-jwt.module.js.map