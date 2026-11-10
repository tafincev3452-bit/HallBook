import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TechcardsService {
  constructor(private prisma: PrismaService) {}

  async create(title: string, ingredients: any, steps: string[], adminUserId: string, menuItemId?: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.techCard.create({
      data: {
        title,
        ingredients,
        steps,
        establishmentId: admin.establishmentId,
        menuItemId: menuItemId || null,
      },
    });
  }

  async findAll(adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.techCard.findMany({
      where: { establishmentId: admin.establishmentId },
    });
  }
}