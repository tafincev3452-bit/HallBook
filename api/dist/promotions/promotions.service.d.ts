import { PrismaService } from '../prisma/prisma.service';
export declare class PromotionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(title: string, description: string, adminUserId: string): Promise<{
        id: string;
        establishmentId: string;
        isActive: boolean;
        title: string;
        description: string;
    }>;
    findAll(adminUserId: string): Promise<{
        id: string;
        establishmentId: string;
        isActive: boolean;
        title: string;
        description: string;
    }[]>;
}
