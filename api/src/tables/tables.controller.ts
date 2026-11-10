import { Controller, Post, Get, Patch, Body, Param, UseGuards, Request } from '@nestjs/common';
import { TablesService } from './tables.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tables')
export class TablesController {
  constructor(private tablesService: TablesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Request() req: any) {
    return this.tablesService.create(body.name, body.x, body.y, body.seats, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    return this.tablesService.findAll(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/position')
  updatePosition(@Param('id') id: string, @Body() body: { x: number; y: number }, @Request() req: any) {
    return this.tablesService.updatePosition(id, body.x, body.y, req.user.userId);
  }
}