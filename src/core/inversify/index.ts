import { container } from './container/container';
import { TYPES } from './inversifyTypes/types';
import { AuthService } from './services/AuthService';
import {IProductDRepo, IUserDRepo} from '../domain_repository';
import { IAuthService, IUserValidation } from '../domain_serivce';
import {IProductService} from "../domain_serivce/IProductService";
import {ITypeDRepo} from "../domain_repository/ITypeDRepo";

const UserPrismaRepo = container.get<IUserDRepo>(TYPES.UserRepo);
const UserValidation = container.get<IUserValidation>(TYPES.UserValidation);
export const GProductRepo = container.get<IProductDRepo>(TYPES.ProductRepo)
export const GAuthService = container.get<IAuthService>(TYPES.AuthService);
export const GProductService = container.get<IProductService>(TYPES.ProductService)
export const GTypeRepository = container.get<ITypeDRepo>(TYPES.TypeRepo)