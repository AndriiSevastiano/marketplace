import { UserDomain } from '../entities';
import { CreateUserDTO, LoginUserDTO } from '../dto_types';
import { JWTFormatDTO } from '../dto_types';

export interface IAuthService {
   signup(dto: CreateUserDTO): Promise<UserDomain>;
   login(login: LoginUserDTO): Promise<{ cookie: string; user: UserDomain }>;
   createToken(format: JWTFormatDTO): TokenData;
   createCookie(data: TokenData): string;
}

export type TokenData = { expiresIn: number; token: string };
