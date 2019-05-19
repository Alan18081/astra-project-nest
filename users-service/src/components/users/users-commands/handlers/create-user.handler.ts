import {CommandHandler, QueryBus, EventBus, ICommandHandler} from '@nestjs/cqrs';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEventsRepository} from '../user-events.repository';
import {UserEventEntity} from '../user-event.entity';
import * as uuid from 'uuid';
import {CreateUserCommand} from '../commands/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

    constructor(
        @InjectRepository(UserEventsRepository)
        private readonly userEventsRepository: UserEventsRepository,
        private readonly eventsBus: EventBus,
        private readonly queryBus: QueryBus
    ) {}

    public async execute(command: CreateUserCommand): Promise<any> {
        const user = await this.queryBus.execute(new FindUserByEmailDto());
        const event = new UserEventEntity(command);
        event.data = command;
        event.entityId = uuid();
        this.eventsBus.publish(await this.userEventsRepository.save(event));
    }

}