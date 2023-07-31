// import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus'
//
//
// export const Post = objectType({
//     name: 'Post',
//     definition(t) {
//         t.int('id')
//         t.string('title')
//         t.string('body')
//         t.boolean('published')
//     },
// })
//
//
// export const PostQuery = extendType({
//     type: 'Query',
//     definition(t) {
//         t.nonNull.list.field('drafts', {
//             type: 'Post',
//             resolve(_root, _args, ctx) {                              // 1
//                 return ctx.db.posts.filter(p => p.published === false)  }
//         })
//         t.list.field('posts', {
//             type: 'Post',
//             resolve(_root, _args, ctx) {
//                 return ctx.db.posts.filter(p => p.published === true)
//             },
//         })
//     },
// })
//
// export const PostMutation = extendType({
//     type: 'Mutation',
//     definition(t) {
//         t.nonNull.field('createDraft', {
//             type: 'Post',
//             args: {                                        // 1
//                 title: nonNull(stringArg()),                 // 2
//                 body: nonNull(stringArg()),                  // 2
//             },
//             resolve(_root, args, ctx) {
//                 const draft = {
//                     id: ctx.db.posts.length + 1,
//                     title: args.title,                         // 3
//                     body: args.body,                           // 3
//                     published: false,
//                 }
//                 ctx.db.posts.push(draft)
//                 return draft }
//         })
//         t.field('publish', {
//             type: 'Post',
//             args: {
//                 draftId: nonNull(intArg()),
//             },
//             resolve(_root, args, ctx) {
//                 let draftToPublish = ctx.db.posts.find(p => p.id === args.draftId)
//                 if (!draftToPublish) {
//                     throw new Error('Could not find draft with id ' + args.draftId)
//                 }
//                 draftToPublish.published = true
//                 return draftToPublish
//             },
//         })
//     },
// })
