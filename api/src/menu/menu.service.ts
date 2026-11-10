import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, price: number, category: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.establishmentId) {
      throw new ForbiddenException('У вас нет заведения');
    }

    return this.prisma.menuItem.create({
      data: {
        name,
        price,
        category,
        establishmentId: user.establishmentId,
      },
    });
  }

  async findAll(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.establishmentId) {
      throw new ForbiddenException('У вас нет заведения');
    }

    return this.prisma.menuItem.findMany({
      where: { establishmentId: user.establishmentId },
    });
  }
}