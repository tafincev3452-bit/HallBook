import { MenuService } from './menu.service';
export declare class MenuController {
    private menuService;
    constructor(menuService: MenuService);
    create(body: {
        name: string;
        price: number;
        category: string;
    }, req: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        isActive: boolean;
        establishmentId: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        isActive: boolean;
        establishmentId: string;
    }[]>;
}
