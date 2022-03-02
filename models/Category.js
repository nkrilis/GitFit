const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // workout_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'workout',
        //         key: 'id',
        //     },
        // },
        // category_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'category',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;