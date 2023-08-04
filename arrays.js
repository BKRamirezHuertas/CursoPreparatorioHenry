/* let listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
 */
/* console.log(listaDeCompras);
listaDeCompras[1];
 */
/* let elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray); */
/* 
console.log(listaDeCompras)
console.log(listaDeCompras.length) */

/* let colores = ["amarillo", "azul"];
colores.push("rojo");  //push para agregar un color al final
colores.unshift("verde");  //unshift para agregar un color al principio
colores.pop("rojo"); //pop para eliminar el elemento agregado al final
colores.shift("verde") //shift para eliminar el elemento agregado al principio
console.log(colores); */

/* let pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
/* let incluyeDali = pintores.includes('Dali');
console.log(incluyeDali);
let incluyeDali = pintores.includes('Monet');  --> determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
console.log(incluyeDali); */

/* let numeros = [7, 6, 8, 9];
let cumplenCondicion = numeros.every((num) => {   --> determina si todos los elementos en un arreglo satisfacen una misma condición.
    return num >5 
});

console.log(cumplenCondicion); */

/* let palabra = 'Henri';
let palabraSeparada = palabra.split('');  --> split permite transformar string en arreglos y viceversa
palabraSeparada.pop();
palabraSeparada.push('y');
/* console.log(palabraSeparada)
let palabraArreglada = palabraSeparada.join('');  --> join permite transformar string en arreglos y viceversa
console.log(palabraArreglada) */

/* forEach ---> para cada uno */ 
/* 
var numeros = [1, 2, 3, 4];
/* numeros.forEach((num) => console.log(num)); // forEach elemento por elemento
numeros.forEach((num) =>{
    if (num === 3) {
        console.log(num);
    }
}); /

let masUno = numeros.map((num) => {  // map crea una copia del arreglo original y puede realizar cambios
    return num + 1;
});
console.log(masUno); */

// for (let i = 0; ) {}; // dentro del parentesis esta compuesto por 3 datos separados por ;.
 // 2do dato nos preguntamos ¿que queremos iterar? 
 //¿Mientras se cumpla que condicion quiero que este bucle se itere
//arr = arreglo
//arr.length -> mientras i sea menor a la cantidad de elemetnos que tenga el arreglo el bucle se ejecuta, pero cuando i es mayor a la cantidad de elementos se rompera
/* 
let arr =[1, 2, 3, 4, 5];

 for(let i = 0;i < arr.length; i++) {
    console.log(arr[i]);
 };
 */

/*  function encontrarLetraP(string) {
    let letras = string.split('');

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === "p") {
            console.log('Si contiene a P');
        }
    }
 }

 encontrarLetraP('Javascript');
 encontrarLetraP('Henry'); */

/*  let arr = [];
 while(arr.length < 5) {
    arr.push('BOOM');
 }

 console.log(arr); */

 