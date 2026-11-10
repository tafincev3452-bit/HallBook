import { HookahService } from './hookah.service';
export declare class HookahController {
    private hookahService;
    constructor(hookahService: HookahService);
    create(body: any, req: any): Promise<{
        id: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        status: string;
        createdAt: Date;
        tableId: string;
        masterId: string;
    }>;
    findAll(req: any): Promise<({
        table: {
            id: string;
            name: string;
            establishmentId: string;
            x: number;
            y: number;
            seats: number;
            isActive: boolean;
        };
    } & {
        id: string;
        strength: string;
        flavors: string[];
        wishes: string | null;
        status: string;
        createdAt: Date;
        tableId: string;
        masterId: string;
    })[]>;
}
