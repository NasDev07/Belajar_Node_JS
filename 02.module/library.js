function tambah(a,b) {
    return a+b;
}

function perkalian(a,b) {
    return a*b;
}

// module.exports.tambah = tambah;
// module.exports.perkalian = perkalian;


module.exports = {
    tambah,
    perkalian,
}

console.log(module);