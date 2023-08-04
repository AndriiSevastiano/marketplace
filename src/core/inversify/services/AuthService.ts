import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { sign } from 'jsonwebtoken';
import {IUserDRepo} from "../../domain_repository";
import { TYPES } from '../inversifyTypes/types'
import {IValidation} from "../../domain_serivce";
import {CreateUserDTO, JWTFormatDTO, LoginUserDTO, UpdateUserDTO} from "../../dto_types";
import bcrypt from 'bcrypt'
import {TokenData} from "../../domain_serivce";
@injectable()
export class AuthService {
    private readonly saltRounds = 2;
    public constructor(@inject(TYPES.UserRepo) private readonly  _UserRepo: IUserDRepo,
                       @inject(TYPES.UserValidation) private readonly _UserValidationService: IValidation<CreateUserDTO, UpdateUserDTO>) {}
    async signup(dto: CreateUserDTO) {
            let {error, value}= this._UserValidationService.CreateUserValidation(dto)
            if(error){throw new Error(error.message)}
            const hashPassword =await bcrypt.hash(value.password ,this.saltRounds)
            return this._UserRepo.create({...value , password:hashPassword})
    }

    async login(dto: LoginUserDTO){
        const user = await this._UserRepo.findOneBy({email: dto.email})
        if (!user) throw new Error('User not found');

        const isPasswordMatching = await bcrypt.compare(user.password , dto.password);
        if (!isPasswordMatching) throw new Error( "Password is not matching");

        const tokenData = this.createToken(user);
        const cookie = this.createCookie(tokenData);

        return { cookie, user };
    }

    public createToken(dataStoredInToken: JWTFormatDTO):TokenData {
        const secretKey  = process.env.JWT_ACCESS_TOKEN_SECRET as string;
        const expiresIn: number = 60 * 60;
        return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
    }

    public createCookie(tokenData: TokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
    }
}
