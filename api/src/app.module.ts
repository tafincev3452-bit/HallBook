import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { EstablishmentsModule } from './establishments/establishments.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [PrismaModule, AuthModule, EstablishmentsModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}