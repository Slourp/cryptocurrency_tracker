import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NewsletterTask {
  /**
   *Run this task every day at 10am
   */
  @Cron('0 10 * * *')
  handleTask() {
    // Add the logic to send newsletter emails
  }
}
