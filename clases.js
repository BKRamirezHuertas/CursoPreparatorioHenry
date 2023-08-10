// // FORMA ANTIGUA ... FUNCION CONSTRUCTORA

// // function Auto(puertas, color, marca, año, ruedas) {
// //     this.puertas = puertas;
// //     this.color = color;
// //     this.marca = marca;
// //     this.año = año;
// //     this.ruedas = ruedas;
// // }

// // let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

// // console.log(miPrimerAuto);
// // console.log(miPrimerAuto.marca);

// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function() {
//         console.log('Este es un ' + this.marca + ' de color ' + this.color);
//     };

// }

// let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

// miPrimerAuto.informacion();

// // console.log(miPrimerAuto);
// // console.log(miPrimerAuto.marca);


//SEGUNDA FORMA
// class Auto{
//     constructor(puertas, color, marca, año, ruedas) {
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     } 

//     informacion() {
//         console.log('Este es un ' + this.marca + ' de color ' + this.color);
//     }
// }

// let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);

// miSegundoAuto.informacion();

// // console.log(miSegundoAuto);
// // console.log(miSegundoAuto.marca);

class Football {
    constructor(jugador) {
        this.jugador = jugador;
    }
    obtenerNomre () {
        console.log(this.jugador);
    }
}

let argentina = new Football('Messi');
let brasil = new Football('Pele');

argentina.obtenerNomre();
brasil.obtenerNomre();