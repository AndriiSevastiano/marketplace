import { Container } from 'inversify'
import { TYPES } from '../inversifyTypes/types'
import { UserRepositoryPrisma } from '../repository/prisma/UserRepositoryPrisma'
import {IUserDRepo} from "../../domain_repository";
import {AuthService} from "../services/AuthService";
import {IValidation} from "../../domain_serivce/IValidation";
import {CreateUserDTO, UpdateUserDTO} from "../../dto_types";
import {UserValidation} from "../services/validation/joivalidation/UserValidation";

export const container = new Container()
container.bind<IUserDRepo>(TYPES.UserRepo).to(UserRepositoryPrisma)
    container.bind<IValidation<CreateUserDTO, UpdateUserDTO>>(TYPES.UserValidation).to(UserValidation)