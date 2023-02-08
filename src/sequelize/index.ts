import { Sequelize } from "sequelize-typescript";

const {
    PASS_LOCAL_DB, 
    DB_NAME,
    USER_LOCAL_DB,
    HOST_LOCAL_DB,
    DB_PORT
} = process.env;

export const sequelize = new Sequelize({
    database: DB_NAME || 'sales_db',
    dialect: "mysql",
    host: HOST_LOCAL_DB,
    username: USER_LOCAL_DB || 'root',
    password: PASS_LOCAL_DB || 'admin12345',
    port: DB_PORT as number|undefined,
    models: [`${__dirname}/models`],
    logging: false
});
