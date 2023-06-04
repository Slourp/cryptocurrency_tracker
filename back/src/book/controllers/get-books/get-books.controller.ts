import { JwtAuthGuard } from '@app/auth/jwt-auth.guard';
import { Book } from '@app/book/schemas/book.schema';
import { BookQueryService } from '@app/book/services';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('books')
export class GetBooksController {
  constructor(private readonly bookQueryService: BookQueryService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookQueryService.findAll(query);
  }
}
