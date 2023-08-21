import {Abstract} from "./Abstract";
import {TypeDomain} from "../../../../entities";
import {Column, Entity, OneToMany} from "typeorm";
import {Product} from "./Product";

@Entity()
export class Type_Product extends Abstract implements TypeDomain {
    @Column({default:null , unique:true})
    img: string;

    @Column({length:30,unique:true})
    type: string;

    @OneToMany(() => Product, (product) => product.type)
    products: Product[]
}
