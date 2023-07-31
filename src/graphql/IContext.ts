import { db } from "./db";
import { PrismaClient } from "@prisma/client"
import {GUserService} from "../core/inversify";

export interface Context {
    db:  typeof GUserService
}
export const context: Context = {
    db: GUserService,
}
