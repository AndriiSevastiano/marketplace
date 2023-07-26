import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus'
import { Context } from '../context'

export const Post = objectType({
    name: 'Post',
    definition(t) {
        t.int('id')
        t.string('title')
        t.string('body')
        t.boolean('published')
    },
})


export const PostQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('drafts', {
            type: 'Post',
            resolve(_root, _args, ctx) {
                return ctx.db.post.findMany({ where: { published: false } })
            },
        })
    },
})

export const PostMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createDraft', {
            type: 'Post',
            args: {
                title: nonNull(stringArg()),
                body: nonNull(stringArg()),
            },
            resolve(_root, args, ctx) {
                const draft = {
                    title: args.title,
                    body: args.body,
                    published: false,
                }
                return ctx.db.post.create({ data: draft })
            },
        })
        t.field('publish', {
            type: 'Post',
            args: {
                draftId: nonNull(intArg()),
            },
            resolve(_root, args, ctx) {
                return ctx.db.post.update({
                    where: { id: args.draftId },
                    data: {
                        published: true,
                    },
                })
            },
        })
    },
})
