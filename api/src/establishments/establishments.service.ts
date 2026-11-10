import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EstablishmentsService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, subdomain: string, userId: string) {
    const establishment = await this.prisma.establishment.create({
      data: {
        name,
        subdomain,
      },
    });

    // Привязываем пользователя к заведению и делаем его админом
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        establishmentId: establishment.id,
        role: 'ESTABLISHMENT_ADMIN',
      },
    });

    return establishment;
  }
}