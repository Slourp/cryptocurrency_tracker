import { User } from '@app/user/schemas/user.schema';
import { UserCommandService } from '@app/user/services';
import { Controller, Delete, Param } from '@nestjs/common';

@Controller('users')
export class DeleteUserController {
  constructor(private readonly userCommandService: UserCommandService) {}

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userCommandService.delete(id);
  }
}
