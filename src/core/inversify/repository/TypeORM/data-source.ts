import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Product} from "./entity/Product";
import {Type_Product} from "./entity/Type_Product";
import {Comment} from "./entity/Comment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "deliveryserverORM",
    synchronize: true,
    logging: false,
    entities: [Type_Product,User, Product],
    migrations: [__dirname+ '../migration/**/*.{js,ts}'],
    subscribers: [],
    migrationsTableName: "custom_migration_table"
})
