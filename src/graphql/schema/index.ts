import UserInputs from "./inputs/User";
import UserMutations from "./mutations/User";
import CategoryQueries from "./queries/Category";
import ProductQueries from "./queries/Product";
import UserQueries from "./queries/User";
import CategoryTypes from "./types/Category";
import ProductTypes from "./types/Product";
import UserTypes from "./types/User";

export const queriesSchema = `
${UserQueries}
${CategoryQueries}
${ProductQueries}
`;

export const mutationsSchema = `
${UserMutations}
`;

export const typesSchema = `
${UserTypes}
${CategoryTypes}
${ProductTypes}
`;

export const inputsSchema = `
${UserInputs}
`;