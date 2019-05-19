import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Queues} from '@store/common';
import {ValidationPipe} from '@nestjs/common';
import {createClientOptions} from '@store/common/helpers';


async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, createClientOptions(Queues.USERS_SERVICE));
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(() => console.log('Users service is started'));
}
bootstrap();
