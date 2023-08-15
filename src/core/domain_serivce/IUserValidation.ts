import {CreateUserDTO, UpdateUserDTO} from "../dto_types";
import {IValidation} from "./IValidation";
import {ILoginValidtion} from "./ILoginValidtion";

export interface IUserValidation extends IValidation<CreateUserDTO, UpdateUserDTO>,  ILoginValidtion{}