import { DataTypes } from "sequelize";
import db from "../db/conn.js";

const User = db.define("User" , {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
})

export default User;