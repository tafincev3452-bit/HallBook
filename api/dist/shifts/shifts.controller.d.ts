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
        establishmentId: string;
        userId: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
    }>;
    findAll(req: any): Promise<({
        user: {
            id: string;
            name: string;
            position: string | null;
        };
    } & {
        id: string;
        establishmentId: string;
        userId: string;
        date: Date;
        startTime: string;
        endTime: string;
        status: string;
    })[]>;
}
