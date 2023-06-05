import { EmailService } from '@app/email/services/email/email.service';
import { AlertTask, NewsletterTask } from '@app/email/tasks/';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailController } from '@app/email/controller/email/email.controller';
import { EmailSchema } from '@app/email/schemas/email.schema';
import { EmailCommandService, EmailQueryService } from '@app/email/services';

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
