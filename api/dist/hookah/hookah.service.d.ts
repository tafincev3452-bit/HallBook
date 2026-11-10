import { PrismaService } from '../prisma/prisma.service';
export declare class HookahService {
    private prisma;
    constructor(prisma: PrismaService);
    create(tableId: string, strength: string, flavors: string[], wishes: string, masterUserId: string): Promise<{
        id: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        status: string;
        createdAt: Date;
        tableId: string;
        masterId: string;
    }>;
    findAll(masterUserId: string): Promise<({
        table: {
            id: string;
            name: string;
            establishmentId: string;
            x: number;
            y: number;
            seats: number;
            isActive: boolean;
        };
    } & {
        id: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        status: string;
        createdAt: Date;
        tableId: string;
        masterId: string;
    })[]>;
}
