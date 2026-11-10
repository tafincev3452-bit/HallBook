import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShiftsService {
  constructor(private prisma: PrismaService) {}

  async create(date: string, startTime: string, endTime: string, userIdToAssign: string, adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) {
      throw new ForbiddenException('У вас нет заведения');
    }

    return this.prisma.shift.create({
      data: {
        date: new Date(date),
        startTime,
        endTime,
        userId: userIdToAssign,
        establishmentId: admin.establishmentId,
        status: 'planned',
      },
    });
  }

  async findAll(adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) {
      throw new ForbiddenException('У вас нет заведения');
    }

    return this.prisma.shift.findMany({
      where: { establishmentId: admin.establishmentId },
      include: { user: { select: { id: true, name: true, position: true } } },
    });
  }
}