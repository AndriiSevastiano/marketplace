import { HttpStatusCode } from './enum_statuc_code';

export class HttpException extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;
    public readonly validationErrors?: any;

    constructor(
        name: string,
        httpCode: HttpStatusCode,
        description: string,
        validationErrors?: any,
    ) {
        super(description);
        this.name = name;
        this.httpCode = httpCode;
        this.validationErrors = validationErrors;

        Error.captureStackTrace(this, HttpException);
    }
}