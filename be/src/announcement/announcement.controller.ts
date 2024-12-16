import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { Announcement } from 'src/database/entities/announcement.entity';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get()
  async getAllTicketClass(): Promise<Announcement[]> {
    return this.announcementService.getAllAnnouncements();
  }

  @Post("add")
  async createAnnouncement(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.createAnnouncement(createAnnouncementDto);
  }
}