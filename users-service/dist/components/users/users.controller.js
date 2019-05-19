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
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const common_2 = require("@store/common");
const commands_1 = require("@store/common/commands");
const users_service_1 = require("./users.service");
const helpers_1 = require("@store/common/helpers");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createOne(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.usersService.createOneCommand(command);
            yield this.usersQueryClient.send(common_2.CommunicationCodes.CREATE_USER, event);
        });
    }
};
__decorate([
    microservices_1.Client(helpers_1.createClientOptions(common_2.Queues.USERS_SERVICE)),
    __metadata("design:type", microservices_1.ClientProxy)
], UsersController.prototype, "usersQueryClient", void 0);
__decorate([
    microservices_1.MessagePattern({ cmd: common_2.CommunicationCodes.CREATE_USER }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commands_1.CreateUserCommand]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createOne", null);
UsersController = __decorate([
    common_1.Controller('/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map