import { PrismaService } from '../prisma/prisma.service';
export declare class HookahService {
    private prisma;
    constructor(prisma: PrismaService);
    create(tableId: string, strength: string, flavors: string[], wishes: string, masterUserId: string): Promise<{
        id: string;
        createdAt: Date;
        status: string;
        tableId: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        masterId: string;
    }>;
    findAll(masterUserId: string): Promise<({
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
        createdAt: Date;
        status: string;
        tableId: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        masterId: string;
    })[]>;
}
