import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

export enum Roles {
  ADMIN = 'Admin',
  USER = 'User',
}

export enum NewsletterOptions {
  NONE = 'None',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
}

export enum AlertOptions {
  NONE = 'None',
  EMAIL = 'Email',
  SMS = 'SMS',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: [true, 'Something wrong happened'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: Roles;

  @Prop({ type: [{ type: String }] })
  followedCryptos: string[];

  @Prop({ type: [{ crypto: String, amount: Number }] })
  wallets: { crypto: string; amount: number }[];

  @Prop({ enum: NewsletterOptions, default: NewsletterOptions.NONE })
  newsletter: NewsletterOptions;

  @Prop({ enum: AlertOptions, default: AlertOptions.NONE })
  getAlert: AlertOptions;
}

export const UserSchema = SchemaFactory.createForClass(User);

/**
 * !TODO refactor to use a NestJS middleware to encrypt password
 */
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});
