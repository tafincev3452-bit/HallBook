import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Request() req: any) {
    return this.bookingsService.create(body.tableId, body.guestName, body.guestPhone, body.date, body.guestsCount, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    return this.bookingsService.findAll(req.user.userId);
  }
}