import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminUserModule } from './admin/users/users.module'; 
import { AdminAuthModule } from './admin/auth/auth.module';

@Module({
  imports: [
    DatabaseModule, 
    UserModule, 
    AuthModule, 
    AdminUserModule, 
    AdminAuthModule
  ]
})
export class AppModule {}
