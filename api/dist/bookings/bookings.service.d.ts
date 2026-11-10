import { PrismaService } from '../prisma/prisma.service';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(tableId: string, guestName: string, guestPhone: string, date: string, guestsCount: number, adminUserId: string): Promise<{
        id: string;
        guestName: string;
        guestPhone: string;
        date: Date;
        guestsCount: number;
        status: string;
        createdAt: Date;
        tableId: string;
        establishmentId: string;
    }>;
    findAll(adminUserId: string): Promise<({
        table: {
            id: string;
            establishmentId: string;
            name: string;
            x: number;
            y: number;
            seats: number;
            isActive: boolean;
        };
    } & {
        id: string;
        guestName: string;
        guestPhone: string;
        date: Date;
        guestsCount: number;
        status: string;
        createdAt: Date;
        tableId: string;
        establishmentId: string;
    })[]>;
}
