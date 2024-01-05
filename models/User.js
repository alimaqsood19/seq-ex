const { Model, DataTypes } = require('sequelize'); //Sequelize library for defining data types
const sequelize = require('../config/connection'); //Connection object

class User extends Model {}

//Define the User table with all the columns (fields)
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'user',
        underscored: true
    }
);

module.exports = User;