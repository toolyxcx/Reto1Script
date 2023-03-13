/*alert("test test test");
 let mensaje;
 mensaje="test";
 alert(mensaje);*/

/*var color1="rojo";
console.log(color1);
var color1="azul";
console.log(color1);*/

/*let mensaje="hola";
console.log(mensaje);
 menaje='h1';
console.log(mensaje);*/

/* let variable=123456;
 variable='estoy aprendiendo JS';
 alert(variable);*/

/* let variable=123456;
 variable='estoy aprendiendo JS';
 alert(typeof(variable));*/

/*let frase='hola mundi desde variable que era numero';
alert(`datatype de frase = ${typeof(frase)}`);
let entero=10;
alert(`datatype de entero=${typeof(entero)}`);
let flotante=10.5;
alert(`datatype de flotante=${typeof(flotante)}`);
let booleano=true;
alert(`datatype de bloeano=${typeof(booleano)}`);
let gran_entero=900719925646879665632;
alert(`datatype de gran entero=${typeof(gran_entero)}`);*/

/* let name=prompt("¿Cuál es tu nombre?");
 let age=prompt("¿Cuantos anos tienes?");
 document.write("bienvenid@"+name+"tienes"+age+"años!");*/

/* var t ="hola";
 console.log(t[0]); //imprimirá la primera letra del texto 't'=> 'H'
 var frase = "TEXTO en MAYÚSCULA";
 console.log(frase.toLowerCase());//Imprimirá => 'texto en mayúscula'
 var otrafrase="Muchas, comas, aqui";
 console.log(otrafrase.split(", ")); //imprimirá el array =>
 ["Muchas", "comas", "aquí"]*/

/* let texto1="esto es una liena. <br>Esta es otra.";
 document.write(texto1);*/

/* console.log(5+5.5);
 console.log(5-5.5);
 console.log(10*30);
 console.log(10/30);
 console.log(1%3);
 console.log(2**3);*/

//Reto 1

/* let GradosF=prompt("Ingrese los grados Farenheit:");
 var Respuesta= ( GradosF- 32) / 1.8;
 alert("Los grados centigrados que debe poner son" +Respuesta);*/

/* var grados_F = prompt("Ingrese los datos Farenheit:");
 var grados_C = (grados_F - 32) / 1.8;
 document.write("Los grados centigrados que debe poner son:"+grados_C);*/

/* let temperatura_inicial = prompt("ingrese la temperatura a convertir en grados F:");
 let centigrados = ((temperatura_inicial-32)/1.8);
 document.write("La temperatura en °C es:"+centigrados);
 alert("La temperatura es:"+centigrados);
 console.log("La temperatura es"+centigrados);*/

//Reto 2

//1.Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.

/*let num = prompt("Ingrese el numero:");
 
 if (num>0){
    document.write("este numero es positivo");
 } else{
    document.write("este numero es negativo");
 }*/

// 2. Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.

/* let num1 =prompt("Ingrese el numero 1:");
 let num2 =prompt("ingrese el numero 2:");
  if (num1>num2){
    document.write(+num1+"<br>es mayor que<br>"+num2);
  }
  else if (num1<num2){
    document.write(+num1+"<br>es menor que<br>"+num2);
  }
  else if (num1==num2 || num2==num1){
    alert("numero 1 y numero 2 son iguales")
  }*/

/*3.Escriba un programa que lea tres números enteros positivos y que calcule e imprima en 
  pantalla el menor y el mayor de ellos.*/

/*let numero1 = prompt("Ingrese el numero 1:");
let numero2 = prompt("Ingrese el numero 2:");
let numero3 = prompt("Ingrese el numero 3:");

if (numero1 < numero3 && numero2 > numero3 || numero1 > numero3 && numero2 < numero3  ) {
  document.write(+numero1 + "<br>" + numero2);

} else if (numero1 < numero2 && numero3 > numero2 || numero1 > numero2 && numero3 < numero2 ) {
  document.write(+numero1 + "<br>" + numero3);

} else if (numero2 < numero1 && numero3 > numero1 || numero2 > numero1 && numero3 < numero1  ) {
  document.write(+numero2 + "<br>" + numero3);
}*/
