import { Module } from '@nestjs/common';
import { EstablishmentsService } from './establishments.service';
import { EstablishmentsController } from './establishments.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [EstablishmentsController],
  providers: [EstablishmentsService],
})
export class EstablishmentsModule {}