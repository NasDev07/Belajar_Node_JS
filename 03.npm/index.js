const faker = require('faker');

faker.locale = "id_ID";

for (let i = 1; i <= 10; i++) {    
    console.log(`---- Data ${i} ----`);
    console.log(`NAMA : ${faker.name.findName}`);
    console.log(`EMIAl : ${faker.internet.email}`);
    console.log(`KOTA : ${faker.address.city}`);
    console.log(`ALAMAT : ${faker.address.streeAddress}`);
    console.log(`PRODUK : ${faker.commerce.productName}`);
    console.log(`PRICE : ${faker.commerce.price}`);
}