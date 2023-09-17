const fs = require('fs');

const path = './';

// function callbackFn(err, files) {
//     files.forEach(file => {
//         console.log(file);
//     });
// }

// fs.readdir(path, callbackFn);

const data =  fs.readdirSync(path);
data.forEach(file => {
    console.log(file);
});

