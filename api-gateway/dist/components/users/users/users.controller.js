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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("@astra/common/dto");
const api_filter_1 = require("../../helpers/filters/api.filter");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const Observable_1 = require("rxjs/internal/Observable");
let UsersController = class UsersController {
    constructor() {
        console.log(path_1.join(__dirname, '../../proto/users.proto'));
        console.log(this.client);
    }
    onModuleInit() {
        this.usersService = this.client.getService('UsersService');
    }
    createOne(dto) {
        return this.usersService.createOne(dto);
    }
};
__decorate([
    microservices_1.Client({
        transport: microservices_1.Transport.GRPC,
        options: {
            url: 'localhost:5000',
            package: 'users',
            protoPath: path_1.join(__dirname, '../../proto/users.proto'),
        },
    }),
    __metadata("design:type", typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" && _a || Object)
], UsersController.prototype, "client", void 0);
__decorate([
    common_1.Post(''),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOperation({ title: 'Create new user' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" && _b || Object]),
    __metadata("design:returntype", typeof (_c = typeof Observable_1.Observable !== "undefined" && Observable_1.Observable) === "function" && _c || Object)
], UsersController.prototype, "createOne", null);
UsersController = __decorate([
    common_1.Controller('users'),
    common_1.UseFilters(api_filter_1.ApiExceptionFilter),
    swagger_1.ApiUseTags('Users'),
    __metadata("design:paramtypes", [])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map