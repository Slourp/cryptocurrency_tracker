import { CreateUserDto, UpdateUserDto } from '@app/user/dto';
import { UserCreatedEvent } from '@app/user/events/user-created.event';
import { UserUpdatedEvent } from '@app/user/events/user-updated.event';
import { User } from '@app/user/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
@Injectable()
export class UserCommandService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private readonly eventEmitter: EventEmitter2,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    const userCreatedEvent = new UserCreatedEvent(createdUser);
    this.eventEmitter.emit(UserCreatedEvent.name, userCreatedEvent);
    return createdUser.save();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userCreatedEvent = new UserUpdatedEvent(updateUserDto);
    this.eventEmitter.emit(UserCreatedEvent.name, userCreatedEvent);
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
