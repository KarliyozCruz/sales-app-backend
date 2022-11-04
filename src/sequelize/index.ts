import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    database: 'sales_db',
    dialect: "mysql",
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 3306,
    models: [`${__dirname}/models`]
});

export default async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log(error);
    }
}
    