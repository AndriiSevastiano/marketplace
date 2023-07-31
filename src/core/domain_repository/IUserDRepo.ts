import {IBaseDRepo} from "./IBaseDRepo";
import {UserDomain} from "../entities"
import {CreateUserDTO ,UpdateUserDTO} from "../dto_types"

export interface IUserDRepo extends IBaseDRepo<UserDomain>{
    create(dto:CreateUserDTO):Promise<Awaited<UserDomain>>
    update(dto:UpdateUserDTO):Promise<Awaited<UserDomain>>
}