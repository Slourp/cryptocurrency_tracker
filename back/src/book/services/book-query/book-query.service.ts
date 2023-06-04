import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from 'src/book/schemas/book.schema';
import * as mongoose from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Query } from 'express-serve-static-core';

@Injectable()
export class BookQueryService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   * !Todo refactor to use @nestjs-query/core @nestjs-query/mongoose
   * @param query
   * @returns
   */
  async findAll(query: Query): Promise<Book[]> {
    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const offset = 5;
    const currentPage = Number(query.page) || 1;
    const skip = offset * (currentPage - 1);

    return this.bookModel
      .find({ ...keyword })
      .limit(offset)
      .skip(skip);
  }

  async findById(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }
}
