import { Module } from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {UsersQueriesController} from './users-queries.controller';
import {eventsHandlers} from './handlers';

@Module({
    imports: [
        CqrsModule,
    ],
    controllers: [
        UsersQueriesController
    ],
    providers: [
        ...eventsHandlers
    ],
})
export class UsersQueriesModule {}