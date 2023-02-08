import UserQueries from "./queries/User";
import CategoryQueries from "./queries/Category";
import ProductQueries from "./queries/Product";
import UserMutations from "./mutations/User";
import ProductTypes from "./types/Product";

export const resolvers = {
    Query: {
        ...UserQueries,
        ...CategoryQueries,
        ...ProductQueries,
    },
    Mutation: {
        ...UserMutations,
    },
    ...ProductTypes
}
