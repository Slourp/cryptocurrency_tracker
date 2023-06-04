import { EmailCommandService } from '@app/email/services/email-command/email-command.service';
import { EmailQueryService } from '@app/email/services/email-query/email-query.service';
import { EmailService } from '@app/email/services/email/email.service';
import { AlertTask } from '@app/email/tasks/alert.task';
import { NewsletterTask } from '@app/email/tasks/newsletter.task';
import { EmailSchema } from '@app/user/schemas/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailController } from './controller/email/email.controller';

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
