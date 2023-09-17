const { User } = require('./models');

// -- Delete Data

User.destroy({where: {id : 5}}).then((result) => {
    console.log(`Successfully deleted`);
}).catch((err) => {
    console.log(`Gagal error ${err}`);
});