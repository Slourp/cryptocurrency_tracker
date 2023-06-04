import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Email {
  @Prop()
  sender: string;

  @Prop()
  recipient: string;

  @Prop()
  subject: string;

  @Prop()
  content: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
