import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
}).catch(error => console.log(error))

export {UserRepositoryORM} from './Repository/UserRepositoryORM'