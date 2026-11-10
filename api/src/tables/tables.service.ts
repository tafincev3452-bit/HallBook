import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TablesService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, x: number, y: number, seats: number, adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.table.create({
      data: {
        name,
        x,
        y,
        seats,
        establishmentId: admin.establishmentId,
      },
    });
  }

  async findAll(adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.table.findMany({
      where: { establishmentId: admin.establishmentId },
    });
  }

  async updatePosition(id: string, x: number, y: number, adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.table.update({
      where: { id },
      data: { x, y },
    });
  }
}