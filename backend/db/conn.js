import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

//Class to improve code clarity
class DataBaseInfo{
    constructor(username, password, database) {
        this.username = username;
        this.password = password;
        this.database = database;
    }
}

//object from class DataBaseInfo
let databaseInfo = new DataBaseInfo(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: databaseInfo.username,
    password: databaseInfo.password,
    database: databaseInfo.database,
});

sequelize.sync();

export default sequelize;