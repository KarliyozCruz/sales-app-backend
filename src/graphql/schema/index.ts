import UserInputs from "./inputs/User";
import UserMutations from "./mutations/User";
import CategoryQueries from "./queries/Category";
import ProductQueries from "./queries/Product";
import UserQueries from "./queries/User";
import CategoryTypes from "./types/Category";
import ProductTypes from "./types/Product";
import UserTypes from "./types/User";
import { buildSchema } from 'graphql';

const queriesSchema = `
${UserQueries}
${CategoryQueries}
${ProductQueries}
`;

const mutationsSchema = `
${UserMutations}
`;

const typesSchema = `
${UserTypes}
${CategoryTypes}
${ProductTypes}
`;

const inputsSchema = `
${UserInputs}
`;

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