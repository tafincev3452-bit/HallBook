import { HookahService } from './hookah.service';
export declare class HookahController {
    private hookahService;
    constructor(hookahService: HookahService);
    create(body: any, req: any): Promise<{
        id: string;
        createdAt: Date;
        status: string;
        tableId: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        masterId: string;
    }>;
    findAll(req: any): Promise<({
        table: {
            id: string;
            name: string;
            establishmentId: string;
            y: number;
            isActive: boolean;
            x: number;
            seats: number;
        };
    } & {
        id: string;
        createdAt: Date;
        status: string;
        tableId: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        masterId: string;
    })[]>;
}
