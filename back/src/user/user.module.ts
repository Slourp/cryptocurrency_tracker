import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CreateUserController,
  GetUserController,
  GetUsersController,
  UpdateUserController,
  DeleteUserController,
} from './controllers';

import { LogHandler } from './events/log-handler';
import { EmailHandler } from './events/email-handler';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { UserCommandService } from './services/user-command/user-command.service';
import { UserQueryService } from './services/user-query/user-query.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [
    CreateUserController,
    GetUserController,
    GetUsersController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    UserService,
    UserCommandService,
    UserQueryService,
    LogHandler,
    EmailHandler,
  ],
  exports: [UserQueryService],
})
export class UserModule {}
