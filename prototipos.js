//EJEMPLO 1

// Array.prototype.mayoresQueTres = function () {
//     let arregloModificado = [];

//     for (let i=0; i < this.length ; i++) {
//         if (this[i] > 3) {
//             arregloModificado.push(false);
//         } else {
//             arregloModificado.push(this[i]);
//         }
//     }

//     return arregloModificado;
// }

// let arreglo = [1, 2, 3, 4, 5];
// let nuevoArreglo = arreglo.mayoresQueTres();

// console.log(nuevoArreglo);

// EJEMPLO 2

class LatinoAmerica {
    constructor () {
        this.paises =[];
    }
}
LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};

let continente = new LatinoAmerica();
continente.agregarPais('Perú');
console.log(continente.paises);