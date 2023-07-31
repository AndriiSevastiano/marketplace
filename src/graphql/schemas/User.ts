import {objectType, interfaceType, intArg, extendType, nonNull, stringArg, list} from 'nexus'


export const CommonFields = interfaceType({
    name: 'CommonFields',
    definition(t) {
        t.int('id', { description: 'The unique identifier' })
        t.string('CreatedAt', { description: 'The date format yyyy-mm-dd' })
        t.string('UpdatedAt', { description: 'The date format yyyy-mm-dd' })
    },
    resolveType: (data) => {
        return 'name' in data ? 'User' : 'title' in data ? 'Post' : null
    },
})

export const User = objectType({
    name: 'User',
    definition(t) {
        t.implements(CommonFields)
        t.string('name')
        t.string('phonenumber')
        t.string('surname')
        t.string('email')
        t.string('avatar')
    },
})
export const UserQuery = extendType({
    type : 'Query',
    definition(t) {
        t.field('users' , {
            type: nonNull(list("User")),
            resolve(_root , _args , ctx){
                return ctx.db.GeTallUsers()
            }
        })
        // t.field('user', {
        //     type: "User",
        //     args: { id: "Int"},
        //     resolve(_root , _args , ctx){
        //         return  ctx.db.user.findFirst({where:{id:_args.id}})
        //     }
        // })
    }
})
export const UserMuation = extendType({
    type:"Mutation",
    definition(t){
        t.nonNull.field('createUser',{
            type:"User",
            args:{
                name:nonNull(stringArg()),
                surname:nonNull(stringArg()),
                phone_number:nonNull(stringArg()),
                email:nonNull(stringArg()),
                password:nonNull(stringArg()),
            },
            resolve(_root,args , ctx){
                return ctx.db.createUser(args)
            }
        })
    }
})
export const Comment = objectType({
    name: 'Comment',
    definition(t) {
        t.string('body')
        t.nonNull.string('user')
        // t.nonNull.field('author', {
        //     type: 'User',
        //     resolve(_root, _args, ctx) {
        //         return ctx.db.comment.
        //     }
        //     ,
        // })
    },
})
export const PostType = objectType({
    name: 'Post',
    definition(t) {
        t.implements('CommonFields') // Implement the common interface
        t.string('title', { description: 'Post title' })
        // Additional fields specific to the Post type
    },
})

// export const Query = extendType({
//     type: 'Query',
//     definition(t) {
//         t.nonNull.list.field('users', {
//             type: 'User',
//             resolve(_root, _args, ctx) {
//                 // 1
//                 return [{ id: 1, name: '123' }]
//             },
//         })
//     },
// })
