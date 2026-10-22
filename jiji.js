
const prix1 = 1500;
const prix2 = 2500;
let nb1500 = 0;
let nb2500 = 0;

for (let age = 11; age <= 20; age++) {
    if (age <= 16) {
        console.log(age);
        console.log('le prix1');
        nb1500++;
    } else {
        console.log(age);
        console.log('le prix2');
        nb2500++;
    }
}

const recette = nb1500 * prix1 + nb2500 * prix2;

console.log('Recette totale : ' + recette + ' FCFA');
console.log('Nombre de billets vendus pour le prix1 : ' + nb1500);
console.log('Nombre de billets vendus pour le prix2 : ' + nb2500);