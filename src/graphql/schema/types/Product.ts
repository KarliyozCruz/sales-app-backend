export default `
    type Product {
        id: ID!
        description: String!
        price: Int!
        category_id: Int!
        categoryIdObject: Category!
        stock: Int!
    }
`;