const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Dining extends Model {

}


// types: hamburger, pizza, seafood

// price

// take out - true or false


Dining.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        }
    }
);


module.exports = Dining;