import { TablesService } from './tables.service';
export declare class TablesController {
    private tablesService;
    constructor(tablesService: TablesService);
    create(body: any, req: any): Promise<{
        id: string;
        name: string;
        x: number;
        y: number;
        seats: number;
        isActive: boolean;
        establishmentId: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        name: string;
        x: number;
        y: number;
        seats: number;
        isActive: boolean;
        establishmentId: string;
    }[]>;
    updatePosition(id: string, body: {
        x: number;
        y: number;
    }, req: any): Promise<{
        id: string;
        name: string;
        x: number;
        y: number;
        seats: number;
        isActive: boolean;
        establishmentId: string;
    }>;
}
