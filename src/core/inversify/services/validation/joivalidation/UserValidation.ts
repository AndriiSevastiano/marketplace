import { IUserValidation } from '../../../../domain_serivce/IUserValidation';
import {CreateUserDTO, LoginUserDTO, UpdateUserDTO} from '../../../../dto_types';
import { CreateUseValidation, LoginUserValidation } from './objects';
import { injectable } from 'inversify';
import {Error} from "sequelize";

@injectable()
export class UserValidation implements IUserValidation
{
CreateObjectValidation(target: CreateUserDTO): {
   error?: Error | undefined;
   value: CreateUserDTO;
} {
   const { error, value, warning } = CreateUseValidation.validate(target);
   return { error, value };
}

LoginUserValidation<LoginUserDTO>(target):{ error?: Error | undefined;
   value: CreateUserDTO;}{
   const { error, value, warning } = LoginUserValidation.validate(target);
   return { error, value };
}

   UpdateObjectValidation(target: UpdateUserDTO): {
   error?: Error | undefined;
   value: UpdateUserDTO;
} {
   return { error: undefined, value: target };
}
}
