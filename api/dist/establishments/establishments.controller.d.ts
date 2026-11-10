import { EstablishmentsService } from './establishments.service';
export declare class EstablishmentsController {
    private establishmentsService;
    constructor(establishmentsService: EstablishmentsService);
    create(body: {
        name: string;
        subdomain: string;
    }, req: any): Promise<{
        id: string;
        name: string;
        subdomain: string;
        logo: string | null;
        style: import("@prisma/client/runtime/library").JsonValue | null;
        seasonalFx: boolean;
        staffDiscount: import("@prisma/client/runtime/library").JsonValue | null;
        subscriptionUntil: Date | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
