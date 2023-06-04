import { Injectable } from '@nestjs/common';
import { EventHandlerInterface } from './event-handler-interface';
import { BookCreatedEvent } from './book-created.event';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EmailHandler implements EventHandlerInterface {
  @OnEvent(BookCreatedEvent.name)
  handle(payload: BookCreatedEvent): void {
    console.log(`Sending email: Book created - ${payload.book.title}`);
  }
}
