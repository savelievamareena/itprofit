import {Sequelize} from "sequelize";
export default async function() {
    const sequelize = new Sequelize('mysql://root:root@127.0.0.1:3306/itprofit');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
