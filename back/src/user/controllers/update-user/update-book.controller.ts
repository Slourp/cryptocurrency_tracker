import { UpdateUserDto } from '@app/user/dto';
import { User } from '@app/user/schemas/user.schema';
import { UserCommandService } from '@app/user/services';
import { Body, Controller, Put, Param } from '@nestjs/common';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly userCommandService: UserCommandService) {}

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userCommandService.update(id, updateUserDto);
  }
}
