import { PrismaService } from '../prisma/prisma.service';
export declare class ShiftsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(date: string, startTime: string, endTime: string, userIdToAssign: string, adminUserId: string): Promise<{
        id: string;
        establishmentId: string;
        userId: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
    }>;
    findAll(adminUserId: string): Promise<({
        user: {
            id: string;
            name: string;
            position: string | null;
        };
    } & {
        id: string;
        establishmentId: string;
        userId: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
    })[]>;
}
