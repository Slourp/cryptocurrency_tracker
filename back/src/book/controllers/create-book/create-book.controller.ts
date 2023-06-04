import { CreateBookDto } from '@app/book/dto';
import { Book } from '@app/book/schemas/book.schema';
import { BookCommandService } from '@app/book/services';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('books')
export class CreateBookController {
  constructor(private readonly bookCommandService: BookCommandService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookCommandService.create(createBookDto);
  }
}
