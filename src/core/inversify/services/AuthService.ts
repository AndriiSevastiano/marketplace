import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { TYPES } from '../inversifyTypes/types'
import {IUserDRepo} from "../../domain_repository";
import {CookieData, IAuthService, IUserValidation, TokenData} from "../../domain_serivce";
import {CreateUserDTO, JWTFormatDTO, LoginUserDTO, UpdateUserDTO} from "../../dto_types";
@injectable()
export class AuthService implements IAuthService {
    private readonly saltRounds = 2;
    public constructor(@inject(TYPES.UserRepo) private readonly  _UserRepo: IUserDRepo,
                       @inject(TYPES.UserValidation) private readonly _UserValidationService: IUserValidation) {}
    async signup(dto: CreateUserDTO) {
        let {error, value}= this._UserValidationService.CreateObjectValidation(dto)
        if(error){throw new Error(error.message)}
        const hashPassword =await bcrypt.hash(value.password ,this.saltRounds)
        return this._UserRepo.create({...value , password:hashPassword})
    }

    async login(dto: LoginUserDTO){
        let {error}= this._UserValidationService.LoginUserValidation(dto)
        if(error){throw new Error(error.message)}
        const user = await this._UserRepo.findOneBy({email: dto.email})
        if (!user) throw new Error('User not found');

        const isPasswordMatching = await bcrypt.compare(dto.password,user.password);
        if (!isPasswordMatching) throw new Error( "Password is not matching");
        const {id, name,surname,email} = user;
        const tokenData = this.createToken({id, name,surname,email});
        const cookie = this.createCookie(tokenData);
        return { cookie, user };
    }

    public createToken(dataStoredInToken: JWTFormatDTO,expiresIn:number=1000*60*60):TokenData {
        const secretKey  = process.env.JWT_ACCESS_TOKEN_SECRET as string || '123';
        return { expiresIn, tokenValue: sign(dataStoredInToken, secretKey, { expiresIn }) };
    }

    public createCookie(tokenData: TokenData,httpOnly:boolean=true,secure:boolean=true):CookieData {
        return {value:tokenData.tokenValue , maxAge:tokenData.expiresIn , httpOnly , secure}
    }
}
