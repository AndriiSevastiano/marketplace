import {CreateProduct} from "../dto_types";
import {ProductDomain} from "../entities";

export interface IProductService {
    createProduct(dto: CreateProduct):Promise<ProductDomain>
}
