import {injectable} from 'inversify'
import 'reflect-metadata'
import {IUserDRepo} from "../../../domain_repository";
import {CreateUserDTO, FindByUserDTO, LoginUserDTO, UpdateUserDTO} from "../../../dto_types";
import {RoleEnumT, UserDomain} from "../../../entities";
import {prisma} from "./prisma.client";
import {plainToClass, plainToInstance} from "class-transformer";
import {User} from "../../../../graphql/schemas/User";


@injectable()
export class UserRepositoryPrisma implements IUserDRepo  {
    async findOneBy(dto: FindByUserDTO): Promise<Awaited<UserDomain>> {
        const user = await prisma.user.findFirst({where:{...dto}})
        return plainToInstance(UserDomain,user)
    }

    async create(dto: CreateUserDTO):Promise<Awaited<UserDomain>> {
        const user = await prisma.user.create({data: {...dto}})
        return plainToInstance(UserDomain , user)
    }

    deleteByID(id: number):Promise<Awaited<UserDomain>>{
        return  Promise.resolve({id:1,name:"reper",surname: "ganster" ,password:"123", phone_number:"123",email:"rep@",CreatedAt:"",Role:RoleEnumT.ADMIN , UpdatedAt:""})
    }

  async getAll():Promise<Awaited<UserDomain[]>>{
      const data = await prisma.user.findMany(), realUsers = plainToInstance(UserDomain, data);
      return realUsers
    }

    async getByID(id: number):Promise<Awaited<UserDomain>> {
        const data = await prisma.user.findFirst({where:{id:id}}),realUser = plainToInstance(UserDomain,data)
        return realUser

    }

    update(dto: UpdateUserDTO):Promise<Awaited<UserDomain>> {
        return  Promise.resolve( {id:1,name:"reper",surname: "ganster" ,password:"1234", phone_number:"123",email:"rep@",CreatedAt:"",Role:RoleEnumT.ADMIN , UpdatedAt:"" })
    }

}
