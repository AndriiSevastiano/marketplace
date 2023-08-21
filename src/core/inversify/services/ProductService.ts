import {IProductService} from "../../domain_serivce/IProductService";
import {CreateProduct, UpdateProduct} from "../../dto_types";
import {ProductDomain} from "../../entities";
import {inject, injectable} from "inversify";
import {TYPES} from "../inversifyTypes/types";
import {IProductDRepo} from "../../domain_repository";
import {IValidation} from "../../domain_serivce/IValidation";

@injectable()
export class ProductService implements IProductService{
    public constructor(@inject(TYPES.ProductRepo) private readonly ProductRepository: IProductDRepo,
                       @inject(TYPES.ProductValidation) private readonly ProductValidation:IValidation<CreateProduct, UpdateProduct>) {
    }
    async createProduct(dto: CreateProduct): Promise<ProductDomain> {
        const {error,value} =  this.ProductValidation.CreateObjectValidation(dto)
        if(error){throw new Error(error.message)}
        return this.ProductRepository.create(value)
    }
}   