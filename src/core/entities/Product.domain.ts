import {BaseDomain} from "./Base.domain";

export  class ProductDomain extends BaseDomain{
    name:string
    description:string
    price:number
    currency:string
    IMG?:string
    rating:number
}