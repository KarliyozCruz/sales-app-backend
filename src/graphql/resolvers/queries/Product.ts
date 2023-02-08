import Category from "../../../sequelize/models/Category";
import Product from "../../../sequelize/models/Product"

const getAllProducts = () => {
    return Product.findAll();
}

export default {
    getAllProducts
};