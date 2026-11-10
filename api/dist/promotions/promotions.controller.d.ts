import { PromotionsService } from './promotions.service';
export declare class PromotionsController {
    private promotionsService;
    constructor(promotionsService: PromotionsService);
    create(body: any, req: any): Promise<{
        id: string;
        establishmentId: string;
        isActive: boolean;
        title: string;
        description: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        establishmentId: string;
        isActive: boolean;
        title: string;
        description: string;
    }[]>;
}
