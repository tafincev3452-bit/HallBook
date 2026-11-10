import { PromotionsService } from './promotions.service';
export declare class PromotionsController {
    private promotionsService;
    constructor(promotionsService: PromotionsService);
    create(body: any, req: any): Promise<{
        id: string;
        title: string;
        description: string;
        isActive: boolean;
        establishmentId: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        title: string;
        description: string;
        isActive: boolean;
        establishmentId: string;
    }[]>;
}
