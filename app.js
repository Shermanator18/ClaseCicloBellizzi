let numero = parseInt(prompt("Ingrese un numero a multiplicar"));
let numMult = parseInt(prompt("Ingrese cantidad de veces a multiplicar"));
if (numero < 0 && numMult < 0){
    alert("Error numero mal ingresado");
}else{
    a=0;
    while(a < numMult){
        a++;
        alert("Los Multiplos son:"+numero * a);
    }
}
