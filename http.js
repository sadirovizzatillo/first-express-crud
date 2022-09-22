const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Xush kelibsiz");
        res.end()
    }
    if(req.url === "/get/all"){
        res.write(JSON.stringify(["samsung", "iphone", "huawei"]));
        res.end()
    }
    if(req.url === '/*'){
        res.write("hech nima topilmadi");
    }
});


server.listen(8000)
console.log(`${server.address().port} ni eshitishni boshladim`)