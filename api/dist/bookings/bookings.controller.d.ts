import { BookingsService } from './bookings.service';
export declare class BookingsController {
    private bookingsService;
    constructor(bookingsService: BookingsService);
    create(body: any, req: any): Promise<{
        id: string;
        establishmentId: string;
        createdAt: Date;
        date: Date;
        status: string;
        guestName: string;
        guestPhone: string;
        guestsCount: number;
        tableId: string;
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
        establishmentId: string;
        createdAt: Date;
        date: Date;
        status: string;
        guestName: string;
        guestPhone: string;
        guestsCount: number;
        tableId: string;
    })[]>;
}
