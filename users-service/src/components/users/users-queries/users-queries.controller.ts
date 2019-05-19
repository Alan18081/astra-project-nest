import {Controller} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {MessagePattern} from '@nestjs/microservices';
import {CommunicationCodes} from '@store/common';
import {UserEntity} from '../users-commands/domain/user.entity';

@Controller()
export class UsersQueriesController {

    @MessagePattern({ cmd: CommunicationCodes.GET_USER })
    public async getUser(): Promise<UserEntity> {
        // ret/urn this.queryBus.execute();
    }

}