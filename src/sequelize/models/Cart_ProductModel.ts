import { DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'
import {User} from './UserModel';

export const Cart_Product = sequelize.define('Cart_Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    productId: {
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.SMALLINT,
        defaultValue: 1,
    },
});

Cart_Product.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Cart_Product, { foreignKey: 'userId' });

module.exports = Cart_Product;