import Category from "../../../sequelize/models/Category";
import Product from "../../../sequelize/models/Product"

const getAllProducts = () => {
    return Product.findAll({
        include: {
            model: Category
        }
    });
}

export default {
    getAllProducts
};