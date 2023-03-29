

/*let pizzaMar = ["masa", "tomate", "queso", "especias"];
pizzaMar[1] = "pineapple";

console.log(pizzaMar[1]);*/

/*let pizzaMar = ["masa", "tomate", "queso", "especias"];
    document.write('Listado de ingredientes<br>');
    for (let f = 0; f < pizzaMar.length; f++){
            document.write(pizzaMar[f] + '<br>');
    }*/

/*let pizzaMar = ["masa", "tomate", "queso", "especias"];
document.write("Listado de ingredientes<br>");
for (let f = 0; f < pizzaMar.length; f++) {
  document.write("<li>" + pizzaMar[f] + "</li>");
}
("</ul>");*/

/*let pizzaMar = ["masa", "tomate", "queso", "especias"];
console.log(pizzaMar.sort());
let numeros=[2, 8, 5, 1, 0];
console.log(numeros.sort());*/

/*const fruits=["banano", "naranja", "manzana"];
fruits.push("limon");
console.log(fruits);

fruits[fruits.length]="melon";
fruits.unshift("piña");*/

//reto 5 

let vec1 = new Array(7);
let vec2 = new Array(7);
let vecsuma = new Array(7);

function cargarVectores(vec1, vec2) {
  for (let f = 0; f < vec1.length; f++) {
    let valor = prompt("Digite 7 numeros para el primer arreglo:", "");
    vec1[f] = parseInt(valor);
  }
  for (let f = 0; f < vec2.length; f++) {
    let valor = prompt("Digite 7 numeros para el segundo arreglo:", "");
    vec2[f] = parseInt(valor);
  }
}

function sumarVectores(vec1, vec2, vecsuma) {
  for (let f = 0; f < vecsuma.length; f++) {
    vecsuma[f] = vec1[f] + vec2[f];
    alert("la suma de cada componente "+vecsuma);
  }
}

function imprimirVector(vecsuma) {
  for (let f = 0; f < vecsuma.length; f++) {
    document.write(vecsuma[f] + " ");
  }
}


cargarVectores(vec1, vec2);
sumarVectores(vec1, vec2, vecsuma);
imprimirVector(vecsuma);










