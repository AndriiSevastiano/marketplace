import {injectable} from "inversify";
import {ITypeDRepo} from "../../../../domain_repository/ITypeDRepo";
import {CreateTypeDTO} from "../../../../dto_types";
import { TypeDomain} from "../../../../entities";
import {AppDataSource} from "../data-source";
import {Type_Product} from "../entity/Type_Product";
import {plainToInstance} from "class-transformer";


@injectable()
export class TypeRepositoryORM implements ITypeDRepo {
    private readonly TypeRepo = AppDataSource.getRepository(Type_Product)
    async create(dto: CreateTypeDTO): Promise<Awaited<TypeDomain>> {
        const product =await this.TypeRepo.createQueryBuilder().insert().into(Type_Product).values(dto).execute();
        return plainToInstance(TypeDomain,  {...dto, ...product.raw[0]});
    }

    deleteByID(id: number): Promise<Awaited<TypeDomain>> {
        return Promise.resolve(undefined);
    }

    async getAll(): Promise<Awaited<TypeDomain[]>> {
        const product = await this.TypeRepo.find()
        return plainToInstance(TypeDomain,product)
    }

    getByID(id: number): Promise<Awaited<TypeDomain>> {
        return Promise.resolve(undefined);
    }

}