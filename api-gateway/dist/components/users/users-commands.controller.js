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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const commands_1 = require("@store/common/commands");
let UsersCommandsController = class UsersCommandsController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createOne(command) {
        return this.usersService.createOne(command);
    }
};
__decorate([
    common_1.Post(''),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiOperation({ title: 'Create new user' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commands_1.CreateUserCommand]),
    __metadata("design:returntype", Promise)
], UsersCommandsController.prototype, "createOne", null);
UsersCommandsController = __decorate([
    common_1.Controller('users'),
    swagger_1.ApiUseTags('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersCommandsController);
exports.UsersCommandsController = UsersCommandsController;
//# sourceMappingURL=users-dto.controller.js.map