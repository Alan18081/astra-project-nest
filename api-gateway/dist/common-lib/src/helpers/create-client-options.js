"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
exports.createClientOptions = (queue, path) => ({
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: [path],
        queue,
        queueOptions: { durable: false }
    },
});
//# sourceMappingURL=create-client-options.js.map