// import { DataTypes, sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import { Status } from "../constants/index.js";
import { sequelize } from '../database/database.js';
import { Task } from "./task.js";
import {encript}  from "../common/bcrypt.js";
import logger from "../logs/logger.js";
// import {encript} from "../common/bcrypt.js";

export const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Ingrese nombre del usuario'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese password'
            }
        }
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: Status.ACTIVE,
        validate: {
            isIn: {
                args: [[Status.ACTIVE, Status.INACTIVE]],
                mgs: `Dede ser ${Status.ACTIVE} o ${Status.INACTIVE}`,
            }
        }
    }
});

//realacion uno a muchos
User.hasMany(Task);
//pero una tarea solo pertenece a un usuario
Task.belongsTo(User);

User.beforeCreate(async (user) => {
    try {
        user.password = await encript(user.password);
    } catch (error) {
        logger.error(error.message);
        throw new Error(error.message);
    }
});
User.beforeUpdate(async (user) => {
    try {
        user.password = await encript(user.password);
    } catch (error) {
        logger.error(error.message);
        throw new Error(error.message);
    }
});