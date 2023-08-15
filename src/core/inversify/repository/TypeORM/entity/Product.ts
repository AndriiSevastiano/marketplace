import {Column, Entity} from "typeorm";
import {Abstract} from "./Abstract";
import {ProductDomain} from "../../../../entities";

@Entity()
export class Product extends Abstract implements ProductDomain{
    @Column({length: 20,unique:true})
    name: string;

    @Column({length: 200})
    description: string;

    @Column({length: 4})
    price: number;

    @Column({length:2})
    currency: string;

    @Column({default:0})
    rating: number;

    @Column({default:null})
    IMG: string;
}