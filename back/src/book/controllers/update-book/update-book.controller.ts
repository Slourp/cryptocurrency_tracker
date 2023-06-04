import { UpdateBookDto } from '@app/book/dto';
import { Book } from '@app/book/schemas/book.schema';
import { BookCommandService } from '@app/book/services';
import { Body, Controller, Put, Param } from '@nestjs/common';

@Controller('books')
export class UpdateBookController {
  constructor(private readonly bookCommandService: BookCommandService) {}

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookCommandService.update(id, updateBookDto);
  }
}
