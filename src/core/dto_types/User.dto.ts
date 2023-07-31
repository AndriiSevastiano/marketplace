import {UserDomain} from '../entities'

export type CreateUserDTO = Omit<UserDomain, 'AVATAR' | 'id' | 'CreatedAt' | 'UpdatedAt'>;
export type UpdateUserDTO = Partial<UserDomain>
export type DeleteUserDTO = Pick<UserDomain, "id" | "email" | "phone_number">
