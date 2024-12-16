import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from 'src/database/entities/promotion.entity';

@Controller('promotions')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Get()
  async getAllPromotions(): Promise<Promotion[]> {
    return this.promotionService.getAllPromotions();
  }

  @Post('add')
  async createPromotion(@Body() createPromotionDto: CreatePromotionDto) {
    return this.promotionService.createPromotion(createPromotionDto);
  }
}