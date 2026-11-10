import { PrismaService } from '../prisma/prisma.service';
export declare class PromotionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(title: string, description: string, adminUserId: string): Promise<{
        id: string;
        title: string;
        description: string;
        isActive: boolean;
        establishmentId: string;
    }>;
    findAll(adminUserId: string): Promise<{
        id: string;
        title: string;
        description: string;
        isActive: boolean;
        establishmentId: string;
    }[]>;
}
