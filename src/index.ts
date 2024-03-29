import Express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { rootValue, schema } from './graphql';
import cors from 'cors';
import connection from './sequelize';


const app = Express();

connection().then(() => {
    app.use(cors());
    
    app.use('/api', graphqlHTTP({
        schema,
        rootValue,
        graphiql: true
    }));
    
    app.listen(4000, () => {
        console.log('GraphQL corriendo http://localhost:4000/api');
    });
});
