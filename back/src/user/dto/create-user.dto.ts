import { Roles } from '../schemas/user.schema';

export class CreateUserDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly role: Roles;
}
