import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Announcement } from 'src/database/entities/announcement.entity';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  async getAllAnnouncements(): Promise<Announcement[]> {
    return await this.announcementRepository.find();
  }

  async createAnnouncement(createAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    const newAnnouncement = this.announcementRepository.create(createAnnouncementDto);
    return await this.announcementRepository.save(newAnnouncement);
  }
}
