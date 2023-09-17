const { User } = require('./models');
const { Op} = require("sequelize");

//  -- Read / Select Data
User.findAll({
    attributes: ['id', 'firstName', 'lastName', 'email'],
    // where: {
    //     // id: 5
    //     firstName: {[Op.like]: '%Budi%'}
    // }
}).then((result) => {
    result.forEach((data) => {
        console.log(`--------------------------------`);
        console.log(`ID: ${data.id}`);
        console.log(`FirstName: ${data.firstName}`);
        console.log(`LastName: ${data.lastName}`);
        console.log(`Email: ${data.email}`);
        console.log(`--------------------------------`);
    });

}).catch((err) => {
    console.log("Error" + err);
});