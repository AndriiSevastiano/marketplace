import Joi from 'joi';
import {UserDomain} from "../../../../../entities";

export const CreateUseValidation = Joi.object<UserDomain>({
   id: Joi.number().integer().positive().optional(),
   name: Joi.string().max(30).required(),
   surname: Joi.string().max(30).required(),
   email: Joi.string().email({ ignoreLength: false }).max(30).required(),
   phone_number: Joi.string().max(16).pattern(new RegExp('^(?:0|380)\\d{9}$')).required(),
   password: Joi.string()
      .min(8)
      .max(25)
      .pattern(
         new RegExp(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?~`]).{8,25}$/
         )
      )
      .required(),
    AVATAR: Joi.any().optional(),
});

export const LoginUserValidation = Joi.object({
   email: Joi.string().email({ ignoreLength: false }).max(30),
   password: Joi.string()
       .min(8)
       .max(25)
       .pattern(
           new RegExp(
               /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?~`]).{8,25}$/
           )
       )
       .required(),
})