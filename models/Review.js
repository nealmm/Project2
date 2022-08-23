const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Review extends Model {

}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            // *** star ratings
            type: DataTypes.INTEGER
        },
        review_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review_comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        dining_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'dining',
              key: 'id'
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

module.exports = Review