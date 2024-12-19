import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';
import { CreateUserDto } from './dto/create-users.dto';
import * as bcrypt from 'bcryptjs';

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

  // Register a new user
  async register(userData: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    userData.password = await bcrypt.hash(userData.password, salt);
    userData['role'] = 'user';
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }

  // Validate user credentials
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
