import { CreateBookDto, UpdateBookDto } from '@app/book/dto';
import { BookEvents } from '@app/book/enum/book-events.enum';
import { BookCreatedEvent } from '@app/book/events/book-created.event';
import { Book } from '@app/book/schemas/book.schema';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
@Injectable()
export class BookCommandService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
    private readonly eventEmitter: EventEmitter2,
  ) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    const bookCreatedEvent = new BookCreatedEvent(createdBook);
    this.eventEmitter.emit(BookCreatedEvent.name, bookCreatedEvent);
    return createdBook.save();
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true });
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id);
  }
}
