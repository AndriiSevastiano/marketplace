import {container}  from "./container/container";
import { TYPES } from './inversifyTypes/types'
import {AuthService} from "./services/AuthService";
import {IUserDRepo} from "../domain_repository";
import {IValidation} from "../domain_serivce/IValidation";
import {CreateUserDTO, UpdateUserDTO} from "../dto_types";

const UserPrismaRepo = container.get<IUserDRepo>(TYPES.UserRepo);
const UserValidation = container.get<IValidation<CreateUserDTO, UpdateUserDTO>>(TYPES.UserValidation)
export const GUserService = new AuthService(UserPrismaRepo,UserValidation)


