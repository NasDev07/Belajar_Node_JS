const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello ini server HTTP node JS");
        res.end();
    } else if (req.url === "/about") {
        res.write("Ini Halaman About");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Ini Halaman Contact");
        res.end();
    } else {
        res.write("Ini Halaman tidak ditemukan");
        res.end();
    }
});

server.listen(PORT);
console.log(`server sedang berjalan pada http://localhost:${PORT}`);