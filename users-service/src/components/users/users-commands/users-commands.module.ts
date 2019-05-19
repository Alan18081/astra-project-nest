import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { commandsHandlers } from './handlers';
import {UserEventsRepository} from './user-events.repository';
import {UserEventEntity} from './user-event.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersCommandsController} from './users-commands.controller';
import {CreateUserHandler} from './handlers/create-user.handler';
import {UsersQueriesModule} from '../users-queries/users-queries.module';

@Module({
    imports: [
        CqrsModule,
        UsersQueriesModule,
        TypeOrmModule.forFeature([UserEventEntity, UserEventsRepository])
    ],
    controllers: [
        UsersCommandsController
    ],
    providers: [
        CreateUserHandler
    ]
})
export class UsersCommandsModule {}