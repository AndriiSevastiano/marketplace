import {UserDomain} from '../entities'

export type CreateUserDTO = Omit<UserDomain, 'AVATAR' | 'id' | 'CreatedAt' | 'UpdatedAt'>;
export type UpdateUserDTO = Partial<UserDomain>
export type JWTFormatDTO = Pick<UserDomain, 'id' | "name" | "surname"|"email">
export type FindByUserDTO = Partial<Pick<UserDomain, 'email' | 'id' | 'phone_number' | 'name' | 'surname' >>
export type LoginUserDTO = Pick<UserDomain, "email" | "password">
export type DeleteUserDTO = Pick<UserDomain, "id" | "email" | "phone_number">
