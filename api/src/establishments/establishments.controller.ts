import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { EstablishmentsService } from './establishments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('establishments')
export class EstablishmentsController {
  constructor(private establishmentsService: EstablishmentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() body: { name: string; subdomain: string },
    @Request() req: any,
  ) {
    return this.establishmentsService.create(body.name, body.subdomain, req.user.userId);
  }
}