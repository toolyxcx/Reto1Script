/*let num1="7";
let num2="5";
let operacion=Number(num1) + Number(num2);

document.write(operacion);*/

/*let num1=7;
let transformaNumber=toString(num1);

document.write(typeof(transformaNumber));*/

/*let estacion = prompt("Escribe una estación en minúsculas.");

switch (estacion) {
  case "invierno":
    alert("Todo es frio.");
    break;
  case "primavera":
    alert("Se colorea el mundo.");
    break;
  case "verano":
    alert("Las noches se hacen largas");
    break;
  case "otoño":
    alert("Donde había color ya no queda nada");
    break;
  default:
    alert("Eso no es una estación");
    break;
}*/

// reto 3

/*let calculadora =prompt("escriba la operacion matematica que desea realizar\n suma\n resta\n multiplicacion\n division\n");

switch (calculadora){
    case "suma":
        let n1= prompt("ingrese el primer numero");
        let n2= prompt("ingrese el segundo numero");
        let operation= Number(n1)+Number(n2);
        alert("el resultado de la operacion es\n"+operation);
        break;
    
    case "resta":
        let numero1= prompt("ingrese el primer numero");
        let numero2= prompt("ingrese el segundo numero");
        let op= Number(numero1) - Number(numero2);
        alert("el resultado de la operacion es\n"+op);
        break;
    
    case "multiplicacion":
        let numb1=prompt("ingrese el primer numero");
        let numb2=prompt("ingrese el segundo numero");
        let ope=Number(numb1) * Number(numb2);
        alert("el resultado de la operacion es\n"+ope);
        break;
    
    case "division":
        let nu1=prompt("ingrese el primer numero");
        let nu2=prompt("ingrese el segundo numero");
        let oper=Number(nu1) / Number(nu2);
        alert("el resultado de la operacion es\n"+oper);
        break;

    
}*/

//reto 3

/*let nombre=prompt("ingrese su nombre completo")
let questionsq=prompt("digite el numero de preguntas que contestó")
let correct=prompt("digite el numero de preguntas correctas")

resultado=(correct/questionsq)*100;
if (resultado>=90){
    document.write("su porcentaje fue de "+resultado+" usted tiene un nivel superior")

}*/

/*for(i=1;i<=10;i++){
    document.write("el valor del bucle es: " + i +"<br>")
}*/

/*let tabla=5;
for(let f=1;f<=10;f++){
    document.write(tabla + '-');
    tabla=tabla+5;
}*/

/*let numero=prompt("Ingrese el numero");
let fact=1;
for(let i = 1; i<=numero; i++){
    fact*=i;

}
alert("el facotrial de " +numero+" es " + fact);*/

// reto 4

/*let n1=prompt("Ingrese el primer numero");
let n2=prompt("Ingrese el segundo numero");
let n3=prompt("Ingrese el tercer numero");
let n4=prompt("Ingrese el cuarto numero");
let n5=prompt("Ingrese el quinto numero");
let n6=prompt("Ingrese el sexto numero");
let n7=prompt("Ingrese el septimo numero");
let n8=prompt("Ingrese el octavo numero");
let n9=prompt("Ingrese el noveno numero");
let n10=prompt("Ingrese el decimo numero");

operacion= Number(n6)+Number(n7)+Number(n8)+Number(n9)+Number(n10);
document.write("el resultado de los ultimos 5 numeros es "+operacion);*/

// 2.

let j = prompt("digite un número del uno al diez");
escribirTablaMultiplicar(j);
//1. se declara la variable de tipo int

//2. antes de crear la funcion se declara una condicion para problema
if (j >= 1 && j <= 10) {
  function escribirTablaMultiplicar(j) {
    document.write("<h2>Tabla de multiplicar del " + j + "</h2>");

    document.write("<ul>");

    for (i = 1; i <= 12; i++) {
      document.write("<li>");
      document.write(j + " x " + i + " = " + j * i);
      document.write("</li>");
    }

    document.write("</ul>");
  }
} else if (j > 10) {
  alert("ERROR");
}else{
  alert("ERROR");
}


