import {Query} from '@nestjs/common';
import {Resolver} from '@nestjs/graphql';


@Resolver('User')
export class UsersQueriesResolver {

    @Query('usersList')
    public async findMany() {

    }

}