import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { EstablishmentsModule } from './establishments/establishments.module';

@Module({
  imports: [PrismaModule, AuthModule, EstablishmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}