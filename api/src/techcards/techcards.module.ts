import { Module } from '@nestjs/common';
import { TechcardsService } from './techcards.service';
import { TechcardsController } from './techcards.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TechcardsController],
  providers: [TechcardsService],
})
export class TechcardsModule {}