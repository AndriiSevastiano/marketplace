import { container } from './container/container';
import { TYPES } from './inversifyTypes/types';
import { AuthService } from './services/AuthService';
import { IUserDRepo } from '../domain_repository';
import { CreateUserDTO, UpdateUserDTO } from '../dto_types';
import { IAuthService, IUserValidation } from '../domain_serivce';

const UserPrismaRepo = container.get<IUserDRepo>(TYPES.UserRepo);
const UserValidation = container.get<IUserValidation<CreateUserDTO, UpdateUserDTO>>(TYPES.UserValidation);
export const GAuthService = container.get<IAuthService>(TYPES.AuthService);
