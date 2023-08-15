import {IProductService} from "../../domain_serivce/IProductService";
import {CreateProduct} from "../../dto_types";
import {ProductDomain} from "../../entities";
import {inject, injectable} from "inversify";
import {TYPES} from "../inversifyTypes/types";
import {IProductDRepo} from "../../domain_repository";

@injectable()
export class ProductService implements IProductService{
    public constructor(@inject(TYPES.ProductRepo) private readonly ProductRepository: IProductDRepo) {
    }
    createProduct(dto: CreateProduct): Promise<ProductDomain> {
        return Promise.resolve(undefined);
    }
}