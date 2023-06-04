import { Book } from '../schemas/book.schema';

export class BookCreatedEvent {
  constructor(public readonly book: Book) {}
}
