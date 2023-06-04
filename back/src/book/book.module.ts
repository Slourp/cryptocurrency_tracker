import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './book.service';
import { BookSchema } from './schemas/book.schema';
import { BookCommandService, BookQueryService } from '@app/book/services';
import {
  CreateBookController,
  GetBookController,
  GetBooksController,
  UpdateBookController,
  DeleteBookController,
} from './controllers';
import { LogHandler } from './events/log-handler';
import { EmailHandler } from './events/email-handler';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [
    CreateBookController,
    GetBookController,
    GetBooksController,
    UpdateBookController,
    DeleteBookController,
  ],
  providers: [
    BookService,
    BookCommandService,
    BookQueryService,
    LogHandler,
    EmailHandler,
  ],
})
export class BookModule {}
