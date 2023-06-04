import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from '@app/user/schemas/user.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class UserQueryService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   * !Todo refactor to use @nestjs-query/core @nestjs-query/mongoose
   * @param query
   * @returns
   */
  async findAll(query: Query): Promise<User[]> {
    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const offset = 5;
    const currentPage = Number(query.page) || 1;
    const skip = offset * (currentPage - 1);

    return this.userModel
      .find({ ...keyword })
      .limit(offset)
      .skip(skip);
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }
}
