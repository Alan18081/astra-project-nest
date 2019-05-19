import { Module } from '@nestjs/common';
import { UsersCommandsController } from './users-commands.controller';
import {UsersService} from './users.service';

@Module({
    imports: [],
    controllers: [UsersCommandsController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}