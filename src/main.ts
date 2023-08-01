import { server } from './graphql'
import {models} from './sequelize/models'

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})
