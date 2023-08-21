import {Column, Entity, ManyToOne,JoinColumn} from "typeorm";
import {Abstract} from "./Abstract";
import {ProductDomain} from "../../../../entities";
import {Type_Product} from "./Type_Product";

@Entity()
export class Product extends Abstract implements ProductDomain{
    @Column({length: 20,unique:true})
    name: string;

    @Column({length: 200})
    description: string;

    @Column({type:"float"})
    price: number;

    @Column({length:2})
    currency: string;

    @Column({default:0})
    rating: number;

    @Column({default:null})
    IMG: string;

    @ManyToOne(()=>Type_Product , (type)=>type.products)
    type:Type_Product
}