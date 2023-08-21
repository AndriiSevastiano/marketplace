import {IUserValidation} from "../../../../domain_serivce";
import {CreateProduct, UpdateProduct} from "../../../../dto_types";
import {Error} from "sequelize";
import {IValidation} from "../../../../domain_serivce/IValidation";
import {CreateProductValidation ,UpdateProductValidation} from "./objects";
import {injectable} from "inversify";

@injectable()
export class ProductValidation implements IValidation<CreateProduct, UpdateProduct>{
    CreateObjectValidation(target: CreateProduct): { error?: Error | undefined; value: CreateProduct } {
        const { error, value, warning } = CreateProductValidation.validate(target);
        return { error, value };
    }

    UpdateObjectValidation(target: UpdateProduct): { error?: Error | undefined; value: UpdateProduct } {
        const { error, value, warning } = UpdateProductValidation.validate(target);
        return { error, value };
    }


}