import { User } from '@app/user/schemas/user.schema';
import { UserQueryService } from '@app/user/services';
import { Controller, Get, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('users')
export class GetUsersController {
  constructor(private readonly userQueryService: UserQueryService) {}

  @Get()
  async getAllUser(@Query() query: ExpressQuery): Promise<User[]> {
    return this.userQueryService.findAll(query);
  }
}
