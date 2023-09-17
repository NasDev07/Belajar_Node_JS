const { User } = require('./models');

// -- Update Data
const data = {
    firstName: 'nasruddin',
    lastName: 'nas',
    email: 'nasruddin@gmail.com'    
}

User.update(data, { where : {id : 7} }).then((result) => {
    console.log("Successfully Update");
}).catch((err) => {
    console.log("Gagal Update: " + err);
});