import { injectable } from 'inversify';
import 'reflect-metadata';
import { plainToClass, plainToInstance } from 'class-transformer';
import {AppDataSource} from "../data-source";
import {IProductDRepo} from '../../../../domain_repository'
import {Product} from "../entity/Product";
import {CreateProduct} from "../../../../dto_types";
import {ProductDomain} from "../../../../entities";


@injectable()
export class ProductRepositoryORM implements IProductDRepo {
    private readonly ProductRepo = AppDataSource.getRepository(Product)

   async create(dto: CreateProduct): Promise<Awaited<ProductDomain>> {
       const product =await this.ProductRepo.createQueryBuilder().insert().into(Product).values({name:dto.name,description:dto.description,price:dto.price,currency:dto.currency}).execute();
       return plainToInstance(ProductDomain,  {...dto, ...product.raw[0]});
    }

   async deleteByID(id: number): Promise<Awaited<ProductDomain>> {
        return Promise.resolve(undefined);
    }

   async getAll(): Promise<Awaited<ProductDomain[]>> {
        const product = await this.ProductRepo.find()
        return plainToInstance(ProductDomain,product)
    }

   async getByID(id: number): Promise<Awaited<ProductDomain>> {
        return Promise.resolve(undefined);
    }



}