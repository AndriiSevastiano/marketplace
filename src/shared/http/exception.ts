import {HttpStatusCode} from './enum'
export class HttpException extends Error {
    constructor(
        public name: string,
        public httpCode: HttpStatusCode,
        description: string,
        public validationErrors?: any,
    ) {
        super(description);
        this.name = name;
        this.httpCode = httpCode;
        this.validationErrors = validationErrors;

        Error.captureStackTrace(this, HttpException);
    }
}