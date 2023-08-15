import {ProductDomain} from "../entities";

export type CreateProduct = Omit<ProductDomain, 'id' | 'rating' | 'CreatedAt' | 'UpdatedAt'>
export type UpdateProduct = Partial<CreateProduct>