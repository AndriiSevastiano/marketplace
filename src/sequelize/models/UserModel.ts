import {sequelize} from "../sequelize";
import {DataTypes} from "sequelize";

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
    },
    surname: {
        type: DataTypes.STRING(30),
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
    },
    phone_number: {
        type: DataTypes.STRING(10),
        unique: true,
    },
    password: {
        type: DataTypes.STRING(40),
        defaultValue: '',
    },
});