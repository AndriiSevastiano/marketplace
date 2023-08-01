import {DataTypes} from "sequelize";
import {sequelize} from "../sequelize";
import {Product} from "./ProductModel";

export const Type = sequelize.define('Type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING(20),
    },
});

Type.hasMany(Product, { foreignKey: 'typeId' });
Product.belongsTo(Type, { foreignKey: 'typeId' });

module.exports = Type;