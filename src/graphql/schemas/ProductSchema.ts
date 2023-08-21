import {gql} from 'apollo-server-core'

export const ProductSchema = gql`
    type Product implements Common{
        id: Int
        CreatedAt: DateTime
        UpdatedAt: DateTime
        name:String!
        description:String!
        price:Float!
        currency:String!
        IMG:String
        rating:Int
        type:Int
    }
    
    extend type Query {
        ProductByType_Id(id:Int!): [Product]
        AllProducts: [Product!]!
        Product(id:Int!):Product!
    }

    extend type Mutation {
        CreateProduct(name:String! , description:String!,price:Float!,currency:String!,IMG:Upload,type:Int):Product
    }
`
