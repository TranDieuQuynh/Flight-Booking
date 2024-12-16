import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promotion } from 'src/database/entities/promotion.entity';
import { CreatePromotionDto } from './dto/create-promotion.dto';

@Injectable()
export class PromotionService {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionRepository: Repository<Promotion>,
  ) {}

  async getAllPromotions(): Promise<Promotion[]> {
    return await this.promotionRepository.find();
  }

  async createPromotion(createPromotionDto: CreatePromotionDto): Promise<Promotion> {
    const newPromotion = this.promotionRepository.create(createPromotionDto);
    return await this.promotionRepository.save(newPromotion);
  }
}
