import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { EstablishmentsModule } from './establishments/establishments.module';
import { MenuModule } from './menu/menu.module';
import { ShiftsModule } from './shifts/shifts.module';

@Module({
  imports: [PrismaModule, AuthModule, EstablishmentsModule, MenuModule, ShiftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}