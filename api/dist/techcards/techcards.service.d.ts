import { PrismaService } from '../prisma/prisma.service';
export declare class TechcardsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(title: string, ingredients: any, steps: string[], adminUserId: string, menuItemId?: string): Promise<{
        id: string;
        establishmentId: string;
        createdAt: Date;
        isActive: boolean;
        title: string;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: string[];
        outputWeight: string | null;
        calories: number | null;
        menuItemId: string | null;
    }>;
    findAll(adminUserId: string): Promise<{
        id: string;
        establishmentId: string;
        createdAt: Date;
        isActive: boolean;
        title: string;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: string[];
        outputWeight: string | null;
        calories: number | null;
        menuItemId: string | null;
    }[]>;
}
