import { PrismaService } from '../prisma/prisma.service';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, price: number, category: string, userId: string): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        isActive: boolean;
        price: number;
        category: string;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        isActive: boolean;
        price: number;
        category: string;
    }[]>;
}
