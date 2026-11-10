import { TechcardsService } from './techcards.service';
export declare class TechcardsController {
    private techcardsService;
    constructor(techcardsService: TechcardsService);
    create(body: any, req: any): Promise<{
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
    findAll(req: any): Promise<{
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
