import { DataTypes } from 'sequelize';
import {sequelize} from '../sequelize';
import {User} from './UserModel'

export const Avatar = sequelize.define('Avatar', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        unique: true,
    },
});

Avatar.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Avatar, { foreignKey: 'userId' });
