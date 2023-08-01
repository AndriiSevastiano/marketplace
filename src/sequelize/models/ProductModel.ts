import { DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'
import {Brand} from "./BrandModel";
import {Type} from "./TypeModel"
import {Comment} from "./CommentModel"

export const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(32),
    },
    description: {
        type: DataTypes.STRING(200),
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 1,
    },
    img: {
        type: DataTypes.STRING,
        unique: true,
    },
    typeId: {
        type: DataTypes.INTEGER,
    },
    brandId: {
        type: DataTypes.INTEGER,
    },
    relese_date: {
        type: DataTypes.DATE,
    },
});

Product.belongsTo(Type, { foreignKey: 'typeId' });
Type.hasMany(Product, { foreignKey: 'typeId' });

Product.belongsTo(Brand, { foreignKey: 'brandId' });
Brand.hasMany(Product, { foreignKey: 'brandId' });

Product.hasMany(Comment, { foreignKey: 'productId' });
Comment.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Product;