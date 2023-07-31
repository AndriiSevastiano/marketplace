import {BaseDomain} from "./Base.domain";

export  class UserDomain extends BaseDomain{
    name:string
    surname:string
    phone_number:string
    email:string
    password:string
    Role?: null | RoleEnumT
    AVATAR?: string
}

export enum RoleEnumT {
    ADMIN='admin',
    USER='user',
    OWNER='owner',
    TECHNICAL_SUPPORT='support',
    VENDOR='vendor',
}
