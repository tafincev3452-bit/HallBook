import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { MenuService } from './menu.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() body: { name: string; price: number; category: string },
    @Request() req: any,
  ) {
    return this.menuService.create(body.name, body.price, body.category, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: any) {
    return this.menuService.findAll(req.user.userId);
  }
}