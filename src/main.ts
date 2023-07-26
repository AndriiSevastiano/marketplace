import { server } from './graphql'

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})
