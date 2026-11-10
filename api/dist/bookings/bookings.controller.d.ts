import { BookingsService } from './bookings.service';
export declare class BookingsController {
    private bookingsService;
    constructor(bookingsService: BookingsService);
    create(body: any, req: any): Promise<{
        id: string;
        guestName: string;
        guestPhone: string;
        date: Date;
        guestsCount: number;
        status: string;
        createdAt: Date;
        tableId: string;
        establishmentId: string;
    }>;
    findAll(req: any): Promise<({
        table: {
            id: string;
            establishmentId: string;
            name: string;
            x: number;
            y: number;
            seats: number;
            isActive: boolean;
        };
    } & {
        id: string;
        guestName: string;
        guestPhone: string;
        date: Date;
        guestsCount: number;
        status: string;
        createdAt: Date;
        tableId: string;
        establishmentId: string;
    })[]>;
}
