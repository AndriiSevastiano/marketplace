import {IBaseDRepo} from "./IBaseDRepo";
import { TypeDomain} from "../entities";
import { CreateTypeDTO} from "../dto_types";

export interface ITypeDRepo extends IBaseDRepo<TypeDomain>{
    create(dto: CreateTypeDTO): Promise<Awaited<TypeDomain>>;
}