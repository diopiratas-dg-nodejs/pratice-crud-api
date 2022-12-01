const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define(
        "Produto",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            discount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                length: 'long'
            },
        },
        {
            tableName: "produtos",
            timestamps: false,
        }
    );

    return Produto;
}