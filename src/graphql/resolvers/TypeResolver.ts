import {DateTimeResolver} from "graphql-scalars/typings";
import {GProductRepo, GTypeRepository} from "../../core/inversify";
import {v4} from "uuid";
import fs from "fs";
import {finished} from "stream/promises";

export const TypeResolvers = {
    Query:{
        AllTypes:()=>GTypeRepository.getAll(),
    },
    Mutation: {
        NewType: async (parent, args) => {
            const { createReadStream, filename , mimetype, encoding } = await args.file
            const imgExtention = filename.split('.')[1]
            const newFileName = v4() +'.'+imgExtention
            const stream = createReadStream();
            const out = fs.createWriteStream(`./static/${newFileName}`);
            stream.pipe(out);
            await finished(out);
            return await GTypeRepository.create({...args,img:newFileName})
        },
    }
}