"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@store/common");
const common_2 = require("@nestjs/common");
const helpers_1 = require("@store/common/helpers");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.createMicroservice(app_module_1.AppModule, helpers_1.createClientOptions(common_1.Queues.USERS_SERVICE));
        app.useGlobalPipes(new common_2.ValidationPipe());
        yield app.listen(() => console.log('Users service is started'));
    });
}
bootstrap();
//# sourceMappingURL=main.js.map