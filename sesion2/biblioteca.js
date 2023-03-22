function Ejemplo1(num1, num2){
    let cadena = "";
    if (num1 > num2){
        cadena = "El mayor ese " + num1 + " y el menor es : " + num2;
    }
    else{
        cadena = "El mayor ese " + num2 + " y el menor es : " + num1;
    }
    return cadena
}

function Ejemplo2(num){
    
    let cadena = "";
    if(num % 2 == 0){
       cadena = "el numero es par";
    }
    else{
        cadena = "el numero es impar";
    }
    return cadena;
}

function EsBisiesto(txt){
    let anio = Number(txt);
    let p = document.getElementById("resultado");
    if ((anio%4==0 && anio%100!=0)|| (anio%4==0 && anio%400==0)){
        p.textContent = "El año es BISIESTO";
    }
    else{
        p.textContent = "El año es NO BISIESTO";
    }
}

function MostrarOrdenados(){
    let p = document.getElementById("resultado");
    let n1 = Number(document.f1.n1.value);
    let n2 = Number(document.f1.n2.value);
    let n3 = Number(document.f1.n3.value);
    let my,cn,mn;
    let mensaje="";
    if (n1 > n2){
        my = n1;
        mn = n2;
    }
    else{
        my = n2;
        mn = n1;
    }
    if (my > n3){
        if (mn > n3){
            cn = mn;
            mn = n3;
        }
        else{
            cn = n3;
        }
    }
    else{
        cn = my;
        my = n3;
    }
    mensaje = "El mayor es " + my + " " + "El central es " + cn + " " + "El menor es " + mn;
    p.textContent = mensaje;
}

function MostrarNombreDia(){
    let p = document.getElementById("resultado");
    let num = Number(document.f1.num.value);
    let mensaje = "";
    switch (num){
        case 1:
            mensaje = "Lunes";
            break;
        case 2:
            mensaje = "Martes";
            break;
        case 3:
            mensaje = "Miercoles";
            break;
        case 4:
            mensaje = "Jueves";
            break;
        case 5:
            mensaje = "Viernes";
            break;
        case 6:
            mensaje = "Sabado";
            break;
        case 7:
            mensaje = "Domingo";
            break;
        default:
            mensaje = "Error, dia no definido";
    }
    p.textContent = mensaje;
}

function MostrarTabla(){
    let num = Number(document.f1.num.value);
    let mensaje = "";
    for (i=1;i<=10;i++){
        mensaje += num + " x " + i + " = " + (num*i) + "\n";
    }
    alert(mensaje);
}

function EsPerfecto(){
    let num = Number(document.f1.num.value);
    let mensaje = "";
    let suma = 0;
    for (i=num-1;i>0;i--){
        suma += (num%i==0) ? i : 0;
    }
    alert((num==suma) ? "Es perfecto" : "No es perfecto");
}

function Rusa(){
    let num1 = Number(document.f1.num1.value);
    let num2 = Number(document.f1.num2.value);
    let suma=0;
    while (num1 > 0){
        if (num1%2!=0){
            suma += num2;
        }
        num1 = Math.trunc(num1 / 2);
        num2 = num2*2;
    }
    alert("El producto es " + suma);
}

function EsPrimo(){
    let num = Number(document.f1.num.value);
    let esPrimo = true;
    let contador =2;
    while (contador <= num/2 && esPrimo){
        if (num%contador==0){
            esPrimo = false;
        }
        else{
            contador++;
        }
    }
    alert((esPrimo) ? "El numero es primo" : "El numero NO es primo");
}