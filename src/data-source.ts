import "reflect-metadata"
import { DataSource } from "typeorm"
import { LivrosMay } from "./entity/LivrosMay"
import { UserMay } from "./entity/UserMay"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "Faculdade",
    synchronize: true,
    logging: false,
    entities: [UserMay, LivrosMay], 
    migrations: [],
    subscribers: [],
})
