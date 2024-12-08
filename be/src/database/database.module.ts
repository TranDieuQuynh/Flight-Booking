import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'airline_database',
      entities: [__dirname + '/../database/entities/*.entity{.ts,.js}'],
      synchronize: true, // Use in development only
    }),
  ],
})
export class DatabaseModule {}