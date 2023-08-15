import { UserDomain } from '../entities';

export interface IBaseDRepo<T> {
   getByID(id: number): Promise<Awaited<T>>;
   deleteByID(id: number): Promise<Awaited<T>>;
   getAll(): Promise<Awaited<T[]>>;
}
