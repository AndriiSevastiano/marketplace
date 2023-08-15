import { Container } from 'inversify';
import { TYPES } from '../inversifyTypes/types';
import { UserRepositoryPrisma } from '../repository/prisma/UserRepositoryPrisma';
import {IProductDRepo, IUserDRepo} from '../../domain_repository';
import { AuthService } from '../services/AuthService';
import { CreateUserDTO, UpdateUserDTO } from '../../dto_types';
import { UserValidation } from '../services/validation/joivalidation/UserValidation';
import { IAuthService, IUserValidation } from '../../domain_serivce';
import {ProductRepositoryORM, UserRepositoryORM} from "../repository/TypeORM/index";
import {IProductService} from "../../domain_serivce/IProductService";
import {ProductService} from "../services/ProductService";

export const container = new Container();
container.bind<IUserDRepo>(TYPES.UserRepo).to(UserRepositoryORM);
container.bind<IUserValidation<CreateUserDTO, UpdateUserDTO>>(TYPES.UserValidation).to(UserValidation);
container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
container.bind<IProductDRepo>(TYPES.ProductRepo).to(ProductRepositoryORM)
container.bind<IProductService>(TYPES.ProductService).to(ProductService)