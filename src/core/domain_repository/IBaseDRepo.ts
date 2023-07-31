import {UserDomain} from "../entities";

export interface IBaseDRepo<T> {
    getByID(id:number):Promise<Awaited<Promise<T>>>
    deleteByID(id:number):Promise<Awaited<Promise<T>>>
    getAll():Promise<Awaited<UserDomain[]>>
}