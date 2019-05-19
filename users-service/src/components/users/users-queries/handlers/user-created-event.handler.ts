import {EventsHandler, IEventHandler} from '@nestjs/cqrs';
import {UserCreatedEvent} from '../event-types';

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {

    handle(event: UserCreatedEvent): any {
        console.log(event);
    }

}