import express from 'express';
import { ApolloServer, gql } from'apollo-server-express';
import { finished } from'stream/promises';
import { ApolloServerPluginLandingPageLocalDefault } from'apollo-server-core';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import fs from 'fs'
import path from "path";
import {v4} from 'uuid'

const typeDefs = gql`
    scalar Upload
    
    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }

    type Query {
        otherFields: Boolean!
        getUploadedFile:Upload
    }

    type Mutation {
        singleUpload(file: Upload!): File!
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
            return { newFileName, mimetype, encoding };
        },
    },
};

export async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    });
    await server.start();
    const app = express();

    app.use(graphqlUploadExpress());
    server.applyMiddleware({ app });
    await new Promise<void>((r) => app.listen({ port: 4000 }, r));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
