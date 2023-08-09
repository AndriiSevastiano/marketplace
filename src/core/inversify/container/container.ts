import { Container } from 'inversify';
import { TYPES } from '../inversifyTypes/types';
import { UserRepositoryPrisma } from '../repository/prisma/UserRepositoryPrisma';
import { IUserDRepo } from '../../domain_repository';
import { AuthService } from '../services/AuthService';
import { CreateUserDTO, UpdateUserDTO } from '../../dto_types';
import { UserValidation } from '../services/validation/joivalidation/UserValidation';
import { IAuthService, IValidation } from '../../domain_serivce';
import {UserRepositoryORM} from "../repository/TypeORM/index";

export const container = new Container();
container.bind<IUserDRepo>(TYPES.UserRepo).to(UserRepositoryORM);
container
   .bind<IValidation<CreateUserDTO, UpdateUserDTO>>(TYPES.UserValidation)
   .to(UserValidation);
container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
