import { Module } from '@nestjs/common';
import { TicketClassController } from './ticket-class.controller';
import { TicketClassService } from './ticket-class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketClass } from '../database/entities/ticket-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketClass])],
  controllers: [TicketClassController],
  providers: [TicketClassService]
})
export class TicketClassModule {}
