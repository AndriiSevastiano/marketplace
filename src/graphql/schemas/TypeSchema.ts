import {gql} from 'apollo-server-core'

export const PTypeSchema = gql`
    type PType implements Common{
        id: Int
        CreatedAt: DateTime
        UpdatedAt: DateTime
        type:String
        img:String
    }

    extend type Query {
        AllTypes: [PType!]!
    }

    extend type Mutation {
        NewType(type:String!, file: Upload):PType!
    }
`
