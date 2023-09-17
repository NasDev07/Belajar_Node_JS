const { User } = require('./models');

//  -- Ceate User
const data = {
    firstName: 'Budi',
    lastName: 'Dandi',
    email: 'budi.dandi@gmail.com'    
}

User.create(data).then((result) => {
    console.log("Successfully");
}).catch((err) => {
    console.log("Error: " + err);
});