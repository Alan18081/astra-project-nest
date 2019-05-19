import { Entity } from 'typeorm';
import {BaseEvent} from '@store/common/events';

@Entity()
export class UserEventEntity extends BaseEvent {
    constructor(partial: Partial<BaseEvent>) {
        super();
        Object.assign(this, partial);
    }
}