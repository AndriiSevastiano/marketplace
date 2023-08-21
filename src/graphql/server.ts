import {  gql } from 'apollo-server-express';
import { finished } from'stream/promises';
import fs from 'fs'
import path from "path";
import {v4} from 'uuid'
import { DateTimeTypeDefinition } from 'graphql-scalars';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import {UserSchema} from "./schemas/UserSchema";
import {UserResolvers} from "./resolvers/UserResolver";
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import cookieParser from 'cookie-parser';
import {ProductResolver} from "./resolvers/ProductResolver";
import {ProductSchema} from "./schemas/ProductSchema";
import {TypeResolvers} from "./resolvers/TypeResolver";
import {PTypeSchema} from './schemas/TypeSchema'
const typeDefs = gql`
    scalar Upload
    
    
    type Query {
        otherFields: Boolean!
        getUploadedFile:Upload
    }

    type Mutation {
        singleUpload(file: Upload!): String!
    }
`;

const resolvers = {
    Upload: GraphQLUpload,
    Query:{
        otherFields:async ()=> {
            return false
        },
        getUploadedFile: () => {
            const filePath = path.join(__dirname, 'reper.jpg');
            try {
                const fileStream = fs.createReadStream(filePath);
                return { createReadStream: () => fileStream };
            } catch (error) {
                throw new Error('Error reading the image file');
            }
        },
    },
    Mutation: {
        singleUpload: async (parent, { file }) => {
            const { createReadStream, filename , mimetype, encoding } = await file;
            const imgExtention = filename.split('.')[1]
            const newFileName = v4() +'.'+imgExtention
            const stream = createReadStream();
            const out = fs.createWriteStream(`./static/${newFileName}`);
            stream.pipe(out);
            await finished(out);
            return newFileName;
        },
    },
};


export async function startServer() {
    interface MyContext {
        res?: any;
        req?: any;
    }
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer<MyContext>({
        typeDefs:[ typeDefs, UserSchema,ProductSchema, PTypeSchema],
        resolvers:[resolvers, UserResolvers,ProductResolver, TypeResolvers],
        csrfPrevention: false,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
        '/',
        cors<cors.CorsRequest>({credentials:true,origin:'http://localhost:3000'}),
        cookieParser(),
        bodyParser.json({ limit: '50mb' }),
    );
    app.use('/graphql',graphqlUploadExpress(),expressMiddleware(server, {context: async ({ req, res }) => {return {  req,res };},}))
    app.use('/reper',(req,res)=>res.send('reper'))
    app.get('/images/:id', (req, res) => {
        const fileName = req.params.id;
        res.sendFile(`${fileName}`,{root:'./static'})
    });
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
