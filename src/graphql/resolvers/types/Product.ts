import { IProduct } from "../../../Interfaces/IProduct"
import Category from "../../../sequelize/models/Category"

const Product = {
    categoryIdObject: async (obj: IProduct): Promise<Category | null> => {
        return await Category.findOne({
            where: {
                id: obj.category_id
            }
        })
    }
}

export default {
    Product
}