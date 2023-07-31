import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import {IUserDRepo} from "../../domain_repository";
import { TYPES } from '../inversifyTypes/types'
import {IValidation} from "../../domain_serivce/IValidation";
import {CreateUserDTO, UpdateUserDTO} from "../../dto_types";
@injectable()
export class UserService  {
    public constructor(@inject(TYPES.UserRepo) private readonly  _UserRepo: IUserDRepo,
                       @inject(TYPES.UserValidation) private readonly _UserValidationService: IValidation<CreateUserDTO, UpdateUserDTO>) {}
    public  GeTallUsers(){
        return this._UserRepo.getAll()
    }
    createUser(dto: CreateUserDTO) {
        try {
            const {error, value}= this._UserValidationService.CreateUserValidation(dto)
            if(error){throw new Error(error.message)}
            return this._UserRepo.create(dto)
        }catch (e) {
            return e
        }
    }

    findAll(): any {}
}
