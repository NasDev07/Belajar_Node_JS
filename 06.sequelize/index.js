const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const results = await sequelize.query(
            "select * from table1", 
            { type: QueryTypes.SELECT}
        );

        console.log(results);

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();