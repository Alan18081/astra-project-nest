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
const helpers_1 = require("@store/common/helpers");
const common_2 = require("@store/common");
let UsersService = class UsersService {
    createOne(command) {
        return this.client
            .send({ cmd: common_2.CommunicationCodes.CREATE_USER }, command)
            .toPromise();
    }
};
__decorate([
    microservices_1.Client(helpers_1.createClientOptions(common_2.Queues.USERS_SERVICE)),
    __metadata("design:type", microservices_1.ClientProxy)
], UsersService.prototype, "client", void 0);
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map