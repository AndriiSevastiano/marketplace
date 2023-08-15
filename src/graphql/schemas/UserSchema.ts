import {gql} from 'apollo-server-core'

export const UserSchema = gql`
    scalar DateTime
    interface Common {
        id: Int
        CreatedAt: DateTime
        UpdatedAt: DateTime
    }
    type User implements Common{
        id: Int
        CreatedAt: DateTime
        UpdatedAt: DateTime
        name: String!
        surname: String!
        phone_number:String!
        email:String!
        password: String!
        Role: RoleEnum
        Avatar: String
    }

    enum RoleEnum {
        ADMIN,
        USER,
        OWNER,
        TECHNICAL_SUPPORT,
        VENDOR,
    }
    
        
    extend type Query {
        AllUsers: [User]
        findUser(id:Int):User
    }
    
   extend type Mutation {
        CreateUser(name:String!, surname : String! , email: String! ,password: String! , phone_number :String! ):User
        Login(email:String! , password:String!):String!
    }
`
