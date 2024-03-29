import UserQueries from "./queries/User";
import CategoryQueries from "./queries/Category";
import ProductQueries from "./queries/Product";
import UserMutations from "./mutations/User";

export const rootValue = {
    ...UserQueries,
    ...CategoryQueries,
    ...ProductQueries,
    ...UserMutations
}
