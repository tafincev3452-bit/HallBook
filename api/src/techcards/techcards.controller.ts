import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { TechcardsService } from './techcards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('techcards')
export class TechcardsController {
  constructor(private techcardsService: TechcardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Request() req: any) {
    return this.techcardsService.create(body.title, body.ingredients, body.steps, req.user.userId, body.menuItemId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    return this.techcardsService.findAll(req.user.userId);
  }
}