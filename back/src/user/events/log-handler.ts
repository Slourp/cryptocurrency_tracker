import { Injectable } from '@nestjs/common';
import { EventHandlerInterface } from './event-handler-interface';
import { UserCreatedEvent } from './user-created.event';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class LogHandler implements EventHandlerInterface {
  @OnEvent(UserCreatedEvent.name)
  handle(payload: UserCreatedEvent): void {
    console.log('User created:', payload);
  }
}
