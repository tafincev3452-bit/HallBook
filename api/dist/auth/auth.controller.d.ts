import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthController {
    private authService;
    private prisma;
    constructor(authService: AuthService, prisma: PrismaService);
    register(body: {
        email: string;
        password: string;
        name: string;
        role?: string;
    }): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
        };
        token: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
        };
        token: string;
    }>;
    getProfile(req: any): Promise<{
        id: string;
        email: string;
        name: string;
        photo: string | null;
        role: string;
        position: string | null;
        tipLink: string | null;
        establishmentId: string | null;
    } | null>;
}
