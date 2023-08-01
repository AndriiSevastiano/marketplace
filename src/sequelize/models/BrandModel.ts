import { DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'
import {Product} from './ProductModel'

export const Brand = sequelize.define('Brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    brand: {
        type: DataTypes.STRING(20),
        unique: true,
    },
    about_brand: {
        type: DataTypes.STRING(200),
    },
});

Brand.hasMany(Product, { foreignKey: 'brandId' });
Product.belongsTo(Brand, { foreignKey: 'brandId' });

module.exports = Brand;