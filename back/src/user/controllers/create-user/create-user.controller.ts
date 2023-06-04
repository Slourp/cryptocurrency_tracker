import { CreateUserDto } from '@app/user/dto';
import { User } from '@app/user/schemas/user.schema';
import { UserCommandService } from '@app/user/services/user-command/user-command.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class CreateUserController {
  constructor(private readonly userCommandService: UserCommandService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userCommandService.create(createUserDto);
  }
}
