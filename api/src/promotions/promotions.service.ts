import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PromotionsService {
  constructor(private prisma: PrismaService) {}

  async create(title: string, description: string, adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.promotion.create({
      data: {
        title,
        description,
        establishmentId: admin.establishmentId,
      },
    });
  }

  async findAll(adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.promotion.findMany({
      where: { establishmentId: admin.establishmentId },
    });
  }
}