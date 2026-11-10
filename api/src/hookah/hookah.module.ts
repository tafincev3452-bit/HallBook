import { Module } from '@nestjs/common';
import { HookahController } from './hookah.controller';
import { HookahService } from './hookah.service';

@Module({
  controllers: [HookahController],
  providers: [HookahService]
})
export class HookahModule {}
