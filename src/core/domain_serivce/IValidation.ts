import { CreateUserDTO } from '../dto_types';

export interface IValidation<CreateDTO, UpdateDTO> {
   CreateUserValidation(target: CreateDTO): {
      error?: undefined | Error;
      value: CreateUserDTO;
   };
   UpdateUserValidation(target: UpdateDTO): {
      error?: undefined | Error;
      value: UpdateDTO;
   };
}
