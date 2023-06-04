import { Module } from '@nestjs/common';
import { EmailController } from './controller/email/email.controller';
import { AlertTask } from '@app/email/tasks/alert.task';
import { NewsletterTask } from '@app/email/tasks/newsletter.task';
import { EmailService } from '@app/email/services/email/email.service';
import { EmailQueryService } from '@app/email/services/email-query/email-query.service';
import { EmailCommandService } from '@app/email/services/email-command/email-command.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSchema } from '@app/user/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Email', schema: EmailSchema }]),
  ],
  providers: [
    EmailService,
    AlertTask,
    NewsletterTask,
    EmailQueryService,
    EmailCommandService,
  ],
  controllers: [EmailController],
})
export class EmailModule {}
