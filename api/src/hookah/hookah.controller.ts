import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { HookahService } from './hookah.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('hookah')
export class HookahController {
  constructor(private hookahService: HookahService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Request() req: any) {
    return this.hookahService.create(body.tableId, body.strength, body.flavors, body.wishes, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: any) {
    return this.hookahService.findAll(req.user.userId);
  }
}