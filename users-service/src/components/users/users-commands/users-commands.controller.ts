import {ClassSerializerInterceptor, Controller, UseInterceptors} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {CommunicationCodes} from '@store/common';
import {CommandBus} from '@nestjs/cqrs';
import {CreateUserCommand} from './commands/create-user.command';

@Controller('/users')
export class UsersCommandsController {

  constructor(
      private readonly commandBus: CommandBus
  ) {}

  @MessagePattern({ cmd: CommunicationCodes.CREATE_USER })
  @UseInterceptors(ClassSerializerInterceptor)
  public createOne(command: CreateUserCommand): Promise<void> {
    return this.commandBus.execute(new CreateUserCommand(command));
  }
}
