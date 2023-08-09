import { injectable } from 'inversify';
import 'reflect-metadata';
import { IUserDRepo } from '../../../../domain_repository';
import {
    CreateUserDTO,
    FindByUserDTO,
    LoginUserDTO,
    UpdateUserDTO,
} from '../../../../dto_types';
import { RoleEnumT, UserDomain } from '../../../../entities';

import { plainToClass, plainToInstance } from 'class-transformer';
import {AppDataSource} from "../data-source";
import {User} from "../entity/User";


@injectable()
export class UserRepositoryORM implements IUserDRepo {
    private readonly UserRepo = AppDataSource.getRepository(User)
    async findOneBy(dto: FindByUserDTO): Promise<Awaited<UserDomain>> {
        const user = await this.UserRepo.findOneBy({...dto});
        return plainToInstance(UserDomain, user);
    }

    async create(dto: CreateUserDTO): Promise<Awaited<UserDomain>> {
        const user =await this.UserRepo.createQueryBuilder().insert().into(User).values({name:dto.name , surname: dto.surname , email: dto.email , phone_number: dto.phone_number , password : dto.password }).execute();
        return plainToInstance(UserDomain,  {...dto, ...user.raw[0]});
    }

    async deleteByID(id: number): Promise<Awaited<UserDomain>> {
        const deleteResult =await this.UserRepo.delete({id:id})
        return deleteResult.raw[0]
    }

    async getAll(): Promise<Awaited<UserDomain[]>> {
        const data = await this.UserRepo.find(),
            realUsers = plainToInstance(UserDomain, data);
        return realUsers;
    }

    async getByID(id: number): Promise<Awaited<UserDomain>> {
        const data = await this.UserRepo.findOneBy({ id: id}),
            realUser = plainToInstance(UserDomain, data);
        return realUser;
    }

   async update(dto: UpdateUserDTO): Promise<Awaited<UserDomain>> {
        const updated = await this.UserRepo.createQueryBuilder().update(User).set({...dto}).where("id=:id", {id:dto.id}).execute()
        return plainToInstance(UserDomain, updated.raw[0]);
    }
}
