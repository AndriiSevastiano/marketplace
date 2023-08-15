import { UserDomain } from '../entities';
import { CreateUserDTO, LoginUserDTO } from '../dto_types';
import { JWTFormatDTO } from '../dto_types';

export interface IAuthService {
   signup(dto: CreateUserDTO): Promise<UserDomain>;
   login(login: LoginUserDTO): Promise<{ cookie: CookieData; user: UserDomain }>;
   createToken(format: JWTFormatDTO,expiresIn:number): TokenData;
   createCookie(data: TokenData): CookieData;
}

export type TokenData = { expiresIn: number; tokenValue: string;};
export type CookieData = {value:string ,httpOnly:boolean, secure :boolean , maxAge:number}
