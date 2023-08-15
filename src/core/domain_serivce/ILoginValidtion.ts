import {CreateUserDTO} from "../dto_types";

export interface ILoginValidtion {
    LoginUserValidation<T>(Target: T):{
        error?: undefined | Error;
        value: CreateUserDTO;
    }
}