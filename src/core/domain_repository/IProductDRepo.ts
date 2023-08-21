import {IBaseDRepo} from "./IBaseDRepo";
import {ProductDomain} from "../entities";
import {CreateProduct} from "../dto_types";

export interface IProductDRepo extends IBaseDRepo<ProductDomain>{
    create(dto: CreateProduct): Promise<Awaited<ProductDomain>>;
    products_byType(product:number):Promise<Awaited<ProductDomain[]>>
}