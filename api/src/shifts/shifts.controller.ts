import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('shifts')
export class ShiftsController {
  constructor(private shiftsService: ShiftsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() body: { date: string; startTime: string; endTime: string; userId: string },
    @Request() req: any,
  ) {
    return this.shiftsService.create(body.date, body.startTime, body.endTime, body.userId, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: any) {
    return this.shiftsService.findAll(req.user.userId);
  }
}