import Category from "../../../sequelize/models/Category"
import Product from "../../../sequelize/models/Product";

const getAllCategories = () => {
    return Category.findAll({
        include:{
            model: Product
        }
    });
}

export default {
    getAllCategories
}