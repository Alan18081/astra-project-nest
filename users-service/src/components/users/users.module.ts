import { Module } from '@nestjs/common';
import {UsersQueriesModule} from './users-queries/users-queries.module';
import {UsersCommandsModule} from './users-commands/users-commands.module';

@Module({
    imports: [
        UsersQueriesModule,
        UsersCommandsModule
    ],
})
export class UsersModule {}

