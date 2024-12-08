import { Controller, Post, Body, Res, HttpCode, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { Response } from 'express';
import { CreateUserDto } from '../users/dto/create-users.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  // Register
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userService.register(createUserDto);
    return { message: 'User registered successfully', user };
  }

  // Login
  @Post('login')
  @HttpCode(200)
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { accessToken } = await this.authService.login(user);

    // Set JWT in cookie
    response.cookie('jwt', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return { message: 'Login successful', user };
  }
}