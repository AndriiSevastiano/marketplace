import { Request, Response , NextFunction  } from 'express'
import {HttpException} from "./HttpException";
import {HttpStatusCode} from "./enum_statuc_code";
export const ErrorHandlingMiddleware = (err: any , req: Request , res: Response , next : NextFunction)=>{
    if(err instanceof HttpException){
        res.status(err.httpCode).json({
            name: err.name,
            message: err.message,
            validationError: err.validationErrors,
            stack: err.stack
        })
    }
    else  res.status(HttpStatusCode.INTERNAL_SERVER).json({
        name: "Internal server error",
        message: err.message,
        validationError: false,
        stack: err.stack
    })
}