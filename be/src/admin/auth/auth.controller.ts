import { Controller, Post, Body, Res, HttpCode, UnauthorizedException } from '@nestjs/common';
import { AdminAuthService } from './auth.service';
import { AdminUserService } from '../users/users.service';
import { Response } from 'express';
import { CreateUserDto } from '../../users/dto/create-users.dto';

@Controller('/admin/auth')
export class AdminAuthController {
  constructor(
    private readonly authService: AdminAuthService,
    private readonly userService: AdminUserService,
  ) {}

  // Register
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto);
    const user = await this.userService.register(createUserDto);
    return { message: 'User registered successfully', user };
  }

  // Login
  @Post('login')
  @HttpCode(200)
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<any> {
    const user = await this.authService.validateUser(email, password);
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