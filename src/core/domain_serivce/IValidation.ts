export interface IValidation<CreateDTO , UpdateDTO> {
     CreateUserValidation(target: CreateDTO):{error?:undefined | Error , value:undefined| object}
     UpdateUserValidation(target:UpdateDTO ):{error?:undefined | Error , value:undefined| object}
}