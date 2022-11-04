import { buildSchema } from 'graphql';
import { queriesSchema, mutationsSchema, typesSchema, inputsSchema } from './schema/';

export const schema = buildSchema(`
    type Query {
        ${queriesSchema}
    }

    type Mutation {
        ${mutationsSchema}
    }

    ${typesSchema}

    ${inputsSchema}
`);

