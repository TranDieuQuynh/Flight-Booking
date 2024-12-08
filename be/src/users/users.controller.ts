import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/database/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  // Get a user by ID
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  // Add a new user
  @Post()
  async addUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.addUser(userData);
  }
}