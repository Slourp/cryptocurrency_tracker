import { User } from '@app/user/schemas/user.schema';
import { UserQueryService } from '@app/user/services';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class GetUserController {
  constructor(private readonly userQueryService: UserQueryService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userQueryService.findById(id);
  }
}
