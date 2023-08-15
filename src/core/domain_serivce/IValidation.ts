export interface IValidation<CreateDTO, UpdateDTO> {
    CreateObjectValidation(target: CreateDTO): {
        error?: undefined | Error;
        value: CreateDTO;
    };
    UpdateObjectValidation(target: UpdateDTO): {
        error?: undefined | Error;
        value: UpdateDTO;
    };
}