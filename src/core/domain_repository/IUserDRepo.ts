import { IBaseDRepo } from './IBaseDRepo';
import { UserDomain } from '../entities';
import {
   CreateUserDTO,
   FindByUserDTO,
   LoginUserDTO,
   UpdateUserDTO,
} from '../dto_types';

export interface IUserDRepo extends IBaseDRepo<UserDomain> {
   create(dto: CreateUserDTO): Promise<Awaited<UserDomain>>;
   update(dto: UpdateUserDTO): Promise<Awaited<UserDomain>>;
   findOneBy(dto: FindByUserDTO): Promise<Awaited<UserDomain>>;
}
