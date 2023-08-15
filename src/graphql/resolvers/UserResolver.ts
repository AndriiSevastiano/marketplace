import {GAuthService} from '../../core/inversify/index'
import { DateTimeResolver } from 'graphql-scalars';
export const UserResolvers = {
    DateTime:DateTimeResolver,
    RoleEnum:{
        ADMIN:'admin',
        USER:'user',
        OWNER:'owner',
        TECHNICAL_SUPPORT:'support',
        VENDOR:'vendor',
    },
    Query:{
        AllUsers:async ()=> {
            return false
        },
        findUser: async () => {

        }
        },
    Mutation: {
        CreateUser: async (parent, args) => {
                return await GAuthService.signup({...args})
        },
        Login: async (parent, args,context)=>{
            const {value , ...Options} = (await GAuthService.login({...args})).cookie
            context.res.cookie("token",value,Options)
            return value;
        }
    }
}

