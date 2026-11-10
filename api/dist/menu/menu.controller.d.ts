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
        establishmentId: string;
        isActive: boolean;
        price: number;
        category: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        name: string;
        establishmentId: string;
        isActive: boolean;
        price: number;
        category: string;
    }[]>;
}
