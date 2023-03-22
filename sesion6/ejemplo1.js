//Haciendo capturas desde la consola
const objRL = require('readline');
const obInterfaz = objRL.createInterface({
    input : process.stdin,
    output : process.stdout,
});

obInterfaz.question("Digite un numero : ", (p) =>{
    console.log("Valor de p en la captura ", p);
    obInterfaz.close();
});