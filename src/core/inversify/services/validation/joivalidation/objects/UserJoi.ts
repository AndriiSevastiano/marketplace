import Joi from 'joi';

export const CreateUseValidation = Joi.object({
   id: Joi.number().integer().positive().optional(),
   name: Joi.string().max(30),
   surname: Joi.string().max(30),
   email: Joi.string().email({ ignoreLength: false }).max(30),
   phone_number: Joi.string().max(10),
   password: Joi.string()
      .min(8)
      .max(25)
      .pattern(
         new RegExp(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?~`]).{8,25}$/
         )
      )
      .required(),
   avatar: Joi.any().optional(),
});
