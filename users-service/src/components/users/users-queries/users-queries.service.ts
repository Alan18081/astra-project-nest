import { Injectable } from '@nestjs/common';
import {UserEntity} from '../users-commands/domain/user.entity';

@Injectable()
export class UsersQueriesService {

    public async findUserByEmail(email: string): Promise<UserEntity> {
        return null;
    }

}