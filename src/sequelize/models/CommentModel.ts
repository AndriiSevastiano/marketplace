import { DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'
import {User}  from './UserModel';
import {Product} from './ProductModel';

export const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    body: {
        type: DataTypes.STRING(200),
    },
    productId: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
});

Comment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });

Comment.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(Comment, { foreignKey: 'productId' });

module.exports = Comment;