import { PrismaService } from '../prisma/prisma.service';
export declare class TablesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, x: number, y: number, seats: number, adminUserId: string): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        y: number;
        isActive: boolean;
        x: number;
        seats: number;
    }>;
    findAll(adminUserId: string): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        y: number;
        isActive: boolean;
        x: number;
        seats: number;
    }[]>;
    updatePosition(id: string, x: number, y: number, adminUserId: string): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        y: number;
        isActive: boolean;
        x: number;
        seats: number;
    }>;
}
