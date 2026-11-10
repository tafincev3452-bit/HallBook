import { PrismaService } from '../prisma/prisma.service';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(tableId: string, guestName: string, guestPhone: string, date: string, guestsCount: number, adminUserId: string): Promise<{
        id: string;
        establishmentId: string;
        createdAt: Date;
        date: Date;
        status: string;
        guestName: string;
        guestPhone: string;
        guestsCount: number;
        tableId: string;
    }>;
    findAll(adminUserId: string): Promise<({
        table: {
            id: string;
            name: string;
            establishmentId: string;
            y: number;
            isActive: boolean;
            x: number;
            seats: number;
        };
    } & {
        id: string;
        establishmentId: string;
        createdAt: Date;
        date: Date;
        status: string;
        guestName: string;
        guestPhone: string;
        guestsCount: number;
        tableId: string;
    })[]>;
}
