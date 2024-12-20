import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AdminUserService } from './users.service';
import { User } from 'src/database/entities/user.entity';

@Controller('/admin/users')
export class AdminUserController {
  constructor(private readonly userService: AdminUserService) {}

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
}