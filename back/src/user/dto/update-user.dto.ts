import { Roles } from '@app/user/schemas/user.schema';

export class UpdateUserDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly role: Roles;
}
