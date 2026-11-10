import { TablesService } from './tables.service';
export declare class TablesController {
    private tablesService;
    constructor(tablesService: TablesService);
    create(body: any, req: any): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        y: number;
        isActive: boolean;
        x: number;
        seats: number;
    }>;
    findAll(req: any): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        y: number;
        isActive: boolean;
        x: number;
        seats: number;
    }[]>;
    updatePosition(id: string, body: {
        x: number;
        y: number;
    }, req: any): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        y: number;
        isActive: boolean;
        x: number;
        seats: number;
    }>;
}
