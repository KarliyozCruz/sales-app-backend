import Express from 'express';
import { schema, typeDefs } from './graphql';
import { sequelize } from './sequelize';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { createServer } from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { json } from 'body-parser';

dotenv.config();


sequelize.authenticate().then(async () => {    
    console.log(typeDefs);
    const app = Express();
    const httpServer = createServer(app);
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
    });
    
    await apolloServer.start();
    
    app.use('/api', 
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(apolloServer));

    await new Promise<void>((resolve) => httpServer.listen({ port: process.env.PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/api`);
}).catch( err => 
    console.log('Error al conectar a la base de datos.')
    );