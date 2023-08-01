import { DataTypes } from 'sequelize';
import {sequelize} from '../sequelize'
import {User} from './UserModel'
import {Comment} from './CommentModel'

export const Comment_Reaction = sequelize.define('Comment_Reaction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isLike: {
        type: DataTypes.BOOLEAN,
        unique: true,
        defaultValue: true,
    },
    commentId: {
        type: DataTypes.INTEGER,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
});

Comment_Reaction.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment_Reaction, { foreignKey: 'userId' });

Comment_Reaction.belongsTo(Comment, { foreignKey: 'commentId' });
Comment.hasMany(Comment_Reaction, { foreignKey: 'commentId' });

module.exports = Comment_Reaction;