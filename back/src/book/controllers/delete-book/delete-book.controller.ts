import { Book } from '@app/book/schemas/book.schema';
import { BookCommandService } from '@app/book/services';
import { Controller, Delete, Param } from '@nestjs/common';

@Controller('books')
export class DeleteBookController {
  constructor(private readonly bookCommandService: BookCommandService) {}

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookCommandService.delete(id);
  }
}
