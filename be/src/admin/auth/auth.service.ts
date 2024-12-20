import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../database/entities/user.entity';
import { AdminUserService } from '../users/users.service';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly userService: AdminUserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    return this.userService.validateUser(email, password);
  }

  async login(user: User): Promise<{ accessToken: string }> {
    const payload = { username: user.username, sub: user.user_id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}