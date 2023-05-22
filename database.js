import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(
    'biodata',
    'root',
    'Rhyno54#',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)