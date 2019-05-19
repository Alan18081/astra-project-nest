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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
const commands_1 = require("@store/common/commands");
const typeorm_1 = require("@nestjs/typeorm");
const user_events_repository_1 = require("../user-events.repository");
const user_event_entity_1 = require("../events/user-event.entity");
const uuid = require("uuid");
let CreateUserHandler = class CreateUserHandler {
    constructor(userEventsRepository, eventsBus) {
        this.userEventsRepository = userEventsRepository;
        this.eventsBus = eventsBus;
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = new user_event_entity_1.UserEventEntity();
            event.data = command;
            event.entityId = uuid();
            this.eventsBus.publish(yield this.userEventsRepository.save(event));
        });
    }
};
CreateUserHandler = __decorate([
    cqrs_1.CommandHandler(commands_1.CreateUserCommand),
    __param(0, typeorm_1.InjectRepository(user_events_repository_1.UserEventsRepository)),
    __metadata("design:paramtypes", [user_events_repository_1.UserEventsRepository,
        cqrs_1.EventBus])
], CreateUserHandler);
exports.CreateUserHandler = CreateUserHandler;
//# sourceMappingURL=create-user.handler.js.map