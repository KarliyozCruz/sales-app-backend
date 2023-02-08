import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from "@graphql-tools/load-files";
import { resolvers } from "../resolvers";

export const typeDefs = mergeTypeDefs(loadFilesSync(`${__dirname}/**/*.graphql`));

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});