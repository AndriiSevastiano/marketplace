import { makeSchema } from 'nexus'
import { join } from 'path'
import * as post from './Post'
export const schema = makeSchema({
    types: [post],
    outputs: {
        typegen: join(__dirname, '..', 'nexus-typegen.ts'),
        schema: join(__dirname, '..', 'schema.graphql'),
    },
    contextType: {
        module: join(__dirname, './../context.ts'),
        export: 'Context',
    },
})
