import { Container } from 'inversify';
import { TYPES } from '../inversifyTypes/types';
import { UserRepositoryPrisma } from '../repository/prisma/UserRepositoryPrisma';
import {IProductDRepo, IUserDRepo} from '../../domain_repository';
import { AuthService } from '../services/AuthService';
import {CreateProduct, CreateUserDTO, UpdateProduct, UpdateUserDTO} from '../../dto_types';
import { UserValidation } from '../services/validation/joivalidation/UserValidation';
import { IAuthService, IUserValidation } from '../../domain_serivce';
import {ProductRepositoryORM, UserRepositoryORM} from "../repository/TypeORM/index";
import {IProductService} from "../../domain_serivce/IProductService";
import {ProductService} from "../services/ProductService";
import {IValidation} from "../../domain_serivce/IValidation";
import {ProductValidation} from "../services/validation/joivalidation/ProductValidation";
import {ITypeDRepo} from "../../domain_repository/ITypeDRepo";
import {TypeRepositoryORM} from "../repository/TypeORM/Repository/TypeRepositoryORM";

export const container = new Container();
container.bind<IUserDRepo>(TYPES.UserRepo).to(UserRepositoryORM);
container.bind<IUserValidation>(TYPES.UserValidation).to(UserValidation);
container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
container.bind<IProductDRepo>(TYPES.ProductRepo).to(ProductRepositoryORM)
container.bind<IProductService>(TYPES.ProductService).to(ProductService)
container.bind<IValidation<CreateProduct, UpdateProduct>>(TYPES.ProductValidation).to(ProductValidation)
container.bind<ITypeDRepo>(TYPES.TypeRepo).to(TypeRepositoryORM)
