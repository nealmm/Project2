const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Dining extends Model {}


// category: hamburger, pizza, seafood

// take out - true or false


Dining.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
        ,
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);


module.exports = Dining;