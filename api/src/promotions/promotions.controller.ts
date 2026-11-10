import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { PromotionsService } from './promotions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('promotions')
export class PromotionsController {
  constructor(private promotionsService: PromotionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Request() req: any) {
    return this.promotionsService.create(body.title, body.description, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    return this.promotionsService.findAll(req.user.userId);
  }
}