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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const common_2 = require("@store/common");
const commands_1 = require("@store/common/commands");
const cqrs_1 = require("@nestjs/cqrs");
let UsersController = class UsersController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    createOne(command) {
        return this.commandBus.execute(command);
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: common_2.CommunicationCodes.CREATE_USER }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commands_1.CreateUserCommand]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createOne", null);
UsersController = __decorate([
    common_1.Controller('/users'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map