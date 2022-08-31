const { Model, DataTypes } = require('sequelize');
const sequelize            = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        place_id: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        rating: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;