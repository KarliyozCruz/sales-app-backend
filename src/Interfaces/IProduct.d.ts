import Category from "../sequelize/models/Category";

declare interface IProduct {
    id?: number,
    description?: string,
    price?: number,
    category_id?: number,
    categoryIdObject?: Category,
    stock?: number,
    created_at?: Date,
    updated_at?: Date
}