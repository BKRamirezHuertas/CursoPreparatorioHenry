// let deportes = { 
//     conBalon: ["Football", "Basketball", "Rugby"], 
//     sinBalon: ["Boxeo", "Surf", "Trekking"],
// }

// let persona = { nombre: "Lucas", edad: 26, estudios: {esProgramador: true} }; 

// // console.log(persona.edad);

// persona.nombre ="Martin"
// // console.log(persona.nombre);
// persona.edad = "21"
// console.log(persona.edad);

// let autos = {};
// autos.marcas = ["Ford", "Audi", "Ferrari"];
// // console.log(autos.marcas);
// delete autos.marcas;
// console.log(autos);

// let misFunciones = {
//     saludar: function() {
//         console.log("Hola");
//     },
// };

// misFunciones.saludar();

// let atuendos = { manos: ['Guantes', 'Anillos'], pies: ['zapatos', 'Soquetes'] };
// // console.log(atuendos.manos);

// atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);


// ejercicio con error
// let comidas = {};
// let diferenciaDeNotaciones = function (propUno, propDos) {
//     comidas.propUno = ['Frutas', 'Vegetales'];
//     comidas['propDos'] = ['Hamburguesa', 'Papas Fritas'];
// };
// diferenciaDeNotaciones('Saludable', 'noSaludable');
// console.log(comidas)

// ejercicio correcto
// let comidas = {};
// let diferenciaDeNotaciones = function (propUno, propDos) {
//     comidas.propUno = ['Frutas', 'Vegetales'];
//     comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
// };
// diferenciaDeNotaciones('Saludable', 'noSaludable');
// console.log(comidas)

// ejercicio correcto 2
// let comidas = {};
// let diferenciaDeNotaciones = function (propUno, propDos) {
//     comidas[propUno] = ['Frutas', 'Vegetales'];
//     comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
// };
// diferenciaDeNotaciones('Saludable', 'noSaludable');
// console.log(comidas)

// // ejemplo con hasOwnProperty error (false)
// let libro = {autor: 'Borges', genero: 'Policial', año: 1990};
// let tienePropiedad = libro.hasOwnProperty('nombre');
// console.log(tienePropiedad);

// // ejemplo corregido
// let libro = {autor: 'Borges', genero: 'Policial', año: 1990};
// let tienePropiedad = libro.hasOwnProperty('autor');
// console.log(tienePropiedad);

// ejemplo con "object.keys"
// let libro = {autor: 'Borges', genero: 'Policial', año: 1990};
// let tienePropiedad = libro.hasOwnProperty('nombre');

// let todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

//EJEMPLO CON FOR IN
// let mundo = { continentes: 7, paises: 195, oceanos: 5};
// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ' + prop)
//     console.log('Este es el valor: ' + mundo[prop]);
// }

//EJEMPLO THIS CON ERROR
// let mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueña: 'Maria López',
//     info: function () {
//         console.log('Mi perro es un: ' + raza);
//     },
// };
// mascota.info();

//EJEMPLO THIS CORREGIDO
// let mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueña: 'Maria López',
//     info: function () {
//         console.log('Mi perro es un: ' + this.raza);
//     },
// };
// mascota.info();