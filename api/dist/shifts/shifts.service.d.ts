import { PrismaService } from '../prisma/prisma.service';
export declare class ShiftsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(date: string, startTime: string, endTime: string, userIdToAssign: string, adminUserId: string): Promise<{
        id: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
        userId: string;
        establishmentId: string;
    }>;
    findAll(adminUserId: string): Promise<({
        user: {
            id: string;
            name: string;
            position: string | null;
        };
    } & {
        id: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
        userId: string;
        establishmentId: string;
    })[]>;
}
