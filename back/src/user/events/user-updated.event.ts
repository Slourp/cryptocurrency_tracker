import { UpdateUserDto } from '@app/user/dto/update-user.dto';

export class UserUpdatedEvent {
  constructor(public readonly user: UpdateUserDto) {}
}
