import {UserDomain} from "../entities";
import {LoginUserDTO} from "../dto_types";

export interface IAuthService {
    authentication():Promise<Awaited<UserDomain>>
    login(login:LoginUserDTO):Promise<Awaited<UserDomain>>
}

export type TokenData = {expiresIn: number , token:string}