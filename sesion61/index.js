let http = require("http");
let servidor = http.createServer();

function Mensaje(request, response){
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write("Hola mundo desde el servidor de NodeJS.");
    response.end();
}

servidor.on('request', Mensaje);

servidor.listen(3000, function(){
    console.log("El servidor esta up");
});