function MakanDitempat() {
    console.log('Pesanan Makna Ditempat');
}

function Dibungkus() {
    console.log('Pesanan Dibungkus');
}

function DiambilOjek() {
    console.log('Pesanan Diambil Ojek');
}

// function pesanan(jml) {
//     setTimeout(() => {
//         console.log(`Pesanan: ${jml}`);
//     }, jml);
// }

function pesanan(jml, callbackFn) {
    setTimeout(callbackFn, jml);
}


pesanan(10, MakanDitempat);
pesanan(9000, Dibungkus);
pesanan(2000, DiambilOjek);