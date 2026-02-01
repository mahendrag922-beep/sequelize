const {sequelize} = require("../config/db");
const {DataTypes} = require("sequelize");
const createTable = sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNULL:false
    },
    email:{
        type:DataTypes.STRING,
        allowNULL:false,
        unique:true
    }
});

module.exports=createTable;