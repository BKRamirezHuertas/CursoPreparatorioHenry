//PRIMER EJEMPLO

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     } 

//     saludar() {
//         console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad);
//     }
// }

// let martin = new Persona('Martin', 26);
// martin.saludar();


// EJEMPLO 2
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     } 

//     saludar() {
//         console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años.');
//     }
// }

// class Programador extends Persona {
//     constructor(nombre, edad, añosDeExperiencia){
//         super(nombre, edad);
//         this.añosDeExperiencia = añosDeExperiencia;
//     }

//     codear() {
//         console.log('Soy ' + this.nombre + '. Codeo desde hace' + this.añosDeExperiencia + ' años.');
//     }
// }

// let martin = new Persona('Martin', 26);
// let programador = new Programador('Maria', 34, 4)
// martin.saludar();
// programador.codear();


// EJEMPLO 3
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    } 

    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años.');
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear() {
        console.log('Soy ' + this.nombre + '. Codeo desde hace' + this.añosDeExperiencia + ' años.');
    }
}

let martin = new Persona('Martin', 26);
let programador = new Programador('Maria', 34, 4)
// martin.saludar();
// programador.codear();
programador.saludar();