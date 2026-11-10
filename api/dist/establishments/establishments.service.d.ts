import { PrismaService } from '../prisma/prisma.service';
export declare class EstablishmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, subdomain: string, userId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        subdomain: string;
        logo: string | null;
        style: import("@prisma/client/runtime/library").JsonValue | null;
        seasonalFx: boolean;
        staffDiscount: import("@prisma/client/runtime/library").JsonValue | null;
        subscriptionUntil: Date | null;
        isActive: boolean;
    }>;
}
