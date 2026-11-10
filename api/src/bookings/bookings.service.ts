import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(tableId: string, guestName: string, guestPhone: string, date: string, guestsCount: number, adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.booking.create({
      data: {
        tableId,
        establishmentId: admin.establishmentId,
        guestName,
        guestPhone,
        date: new Date(date),
        guestsCount,
        status: 'pending',
      },
    });
  }

  async findAll(adminUserId: string) {
    const admin = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    if (!admin?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.booking.findMany({
      where: { establishmentId: admin.establishmentId },
      include: { table: true },
    });
  }
}