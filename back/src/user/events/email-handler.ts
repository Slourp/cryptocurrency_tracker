import { Injectable } from '@nestjs/common';
import { EventHandlerInterface } from './event-handler-interface';
import { UserCreatedEvent } from './user-created.event';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EmailHandler implements EventHandlerInterface {
  @OnEvent(UserCreatedEvent.name)
  handle(payload: UserCreatedEvent): void {
    console.log(`Sending email: User created - ${payload.user.firstName}`);
  }
}
