/* function mayorYMenor (num) {
    if(num > 5 && num < 10) console.log(true);
    else console.log(false)
}

mayorYMenor(2);
mayorYMenor(8);

function mayorYMenorYPar(num) {
    if(num > 5 && num < 10 && num % 2===0) console.log(true);
    else console.log(false)
}

mayorYMenorYPar(2);
mayorYMenorYPar(7);
mayorYMenorYPar(8); */

/* function operadorOr(str) {
    if(str === "Henry" || str.length < 2) console.log(true);
    else console.log(false);
}

operadorOr("Henry");
operadorOr("Javascript");
operadorOr("H");
 */
/* 
function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');

};

negacion(true);
negacion(false); */

/* function negacion(permiso) {
    if (!permiso) console.log('Tiene permiso');

};

negacion(true);
negacion(false); */
/* 
function negacion(permiso) {
    if (permiso === true) console.log('Tiene permiso');

};

negacion(true); */

/* function negacion(permiso) {
    if (permiso !== true) console.log('Tiene permiso');

};

negacion(false);
 */
function condicionCompleja(num) {
    if (num > 15 && num % 3 === 0 || num === 8) console.log(true);
    else console.log(false);
}

condicionCompleja(18);
condicionCompleja(14);
condicionCompleja(30);
condicionCompleja(3);
condicionCompleja(8);