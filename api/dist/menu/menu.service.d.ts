import { PrismaService } from '../prisma/prisma.service';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, price: number, category: string, userId: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        isActive: boolean;
        establishmentId: string;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        isActive: boolean;
        establishmentId: string;
    }[]>;
}
