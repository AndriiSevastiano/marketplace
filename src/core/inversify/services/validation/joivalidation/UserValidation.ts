import {IValidation} from "../../../../domain_serivce/IValidation";
import {CreateUserDTO, UpdateUserDTO} from "../../../../dto_types";
import {CreateUseValidation} from "./objects";
import {injectable} from "inversify";

@injectable()
export class UserValidation implements IValidation<CreateUserDTO, UpdateUserDTO>{
    CreateUserValidation(target: CreateUserDTO): { error?: Error  | undefined; value: object | undefined } {
            const {error,value,warning} = CreateUseValidation.validate(target)
            return {error, value};
    }

    UpdateUserValidation(target: UpdateUserDTO): { error?: Error  | undefined; value: object | undefined } {
        return {error: undefined, value: undefined};
    }

}