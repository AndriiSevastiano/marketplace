import { container } from './container/container';
import { TYPES } from './inversifyTypes/types';
import { AuthService } from './services/AuthService';
import { IUserDRepo } from '../domain_repository';
import { CreateUserDTO, UpdateUserDTO } from '../dto_types';
import { IAuthService, IValidation } from '../domain_serivce';

const UserPrismaRepo = container.get<IUserDRepo>(TYPES.UserRepo);
const UserValidation = container.get<IValidation<CreateUserDTO, UpdateUserDTO>>(TYPES.UserValidation);
export const GUserService = container.get<IAuthService>(TYPES.AuthService);
