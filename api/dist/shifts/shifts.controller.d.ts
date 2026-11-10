import { ShiftsService } from './shifts.service';
export declare class ShiftsController {
    private shiftsService;
    constructor(shiftsService: ShiftsService);
    create(body: {
        date: string;
        startTime: string;
        endTime: string;
        userId: string;
    }, req: any): Promise<{
        id: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
        userId: string;
        establishmentId: string;
    }>;
    findAll(req: any): Promise<({
        user: {
            id: string;
            name: string;
            position: string | null;
        };
    } & {
        id: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
        userId: string;
        establishmentId: string;
    })[]>;
}
