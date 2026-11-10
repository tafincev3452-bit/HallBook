import { PrismaService } from '../prisma/prisma.service';
export declare class TablesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, x: number, y: number, seats: number, adminUserId: string): Promise<{
        id: string;
        name: string;
        x: number;
        y: number;
        seats: number;
        isActive: boolean;
        establishmentId: string;
    }>;
    findAll(adminUserId: string): Promise<{
        id: string;
        name: string;
        x: number;
        y: number;
        seats: number;
        isActive: boolean;
        establishmentId: string;
    }[]>;
    updatePosition(id: string, x: number, y: number, adminUserId: string): Promise<{
        id: string;
        name: string;
        x: number;
        y: number;
        seats: number;
        isActive: boolean;
        establishmentId: string;
    }>;
}
