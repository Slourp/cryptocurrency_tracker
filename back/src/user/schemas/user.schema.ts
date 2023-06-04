import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

export enum Roles {
  ADMIN = 'Admin',
  USER = 'User',
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
}

export const UserSchema = SchemaFactory.createForClass(User);

/**
 * !TODO refactor to use a nestJS middleware to encrypt password
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
