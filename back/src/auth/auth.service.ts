import { Injectable } from '@nestjs/common';
import { UserQueryService } from '@app/user/services';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userQueryService: UserQueryService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userQueryService.findByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password: _, ...result } = user; // Use "_" to discard the password field
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
