import { Book } from '@app/book/schemas/book.schema';
import { BookQueryService } from '@app/book/services';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('books')
export class GetBookController {
  constructor(private readonly bookQueryService: BookQueryService) {}

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return this.bookQueryService.findById(id);
  }
}
