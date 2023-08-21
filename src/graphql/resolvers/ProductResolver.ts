import {GProductService,GProductRepo} from '../../core/inversify'
import { DateTimeResolver } from 'graphql-scalars';
import {v4} from "uuid";
import fs from "fs";
import {finished} from "stream/promises";
export const ProductResolver = {
    DateTime:DateTimeResolver,
    Query:{
        AllProducts:()=>GProductRepo.getAll(),
        Product: (parent,args)=>GProductRepo.getByID(args.id),
        ProductByType_Id: (parent,args)=> GProductRepo.products_byType(args.id)
    },
    Mutation: {
        CreateProduct:  async (parent, args) => {
            const { createReadStream, filename , mimetype, encoding } = await args.IMG
            const imgExtention = filename.split('.')[1]
            const newFileName = v4() +'.'+imgExtention
            const stream = createReadStream();
            const out = fs.createWriteStream(`./static/${newFileName}`);
            stream.pipe(out);
            await finished(out);
            const saveProduct = await GProductService.createProduct({...args,IMG:newFileName})
            return  {...saveProduct};
        },
    }
}

