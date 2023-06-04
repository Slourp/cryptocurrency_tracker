import { User } from '../schemas/user.schema';

export class UserCreatedEvent {
  constructor(public readonly user: User) {}
}
