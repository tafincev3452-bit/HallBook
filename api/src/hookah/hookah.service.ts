import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HookahService {
  constructor(private prisma: PrismaService) {}

  async create(tableId: string, strength: string, flavors: string[], wishes: string, masterUserId: string) {
    const master = await this.prisma.user.findUnique({ where: { id: masterUserId } });
    if (!master?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.hookahOrder.create({
      data: {
        tableId,
        strength,
        flavors,
        wishes,
        masterId: masterUserId,
        status: 'new',
      },
    });
  }

  async findAll(masterUserId: string) {
    const master = await this.prisma.user.findUnique({ where: { id: masterUserId } });
    if (!master?.establishmentId) throw new ForbiddenException('Нет заведения');

    return this.prisma.hookahOrder.findMany({
      where: { masterId: masterUserId },
      include: { table: true },
    });
  }
}