import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AlertTask {
  @Cron('0 8 * * *') // Run the task every day at 8 AM
  handleTask() {
    // Add the logic to send alert emails
  }
}
