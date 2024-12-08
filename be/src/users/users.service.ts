import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Get all users
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Get user by ID
  async getUserById(userId: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { user_id: userId } });
  }

  // Add a new user
  async addUser(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }
}
