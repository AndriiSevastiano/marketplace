import Joi from "joi";
import {CreateProduct, UpdateProduct} from "../../../../../dto_types";

const ObjProductValidation = {
    name: Joi.string().required().min(2).max(20),
    description: Joi.string().required().min(10).max(320),
    IMG: Joi.string().optional(),
    price: Joi.number().positive().required(),
    currency: Joi.string().required().min(1).max(12)
}
export const CreateProductValidation = Joi.object<CreateProduct>(ObjProductValidation)

export const UpdateProductValidation = Joi.object<UpdateProduct>(ObjProductValidation)
