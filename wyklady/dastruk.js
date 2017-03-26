var person = {
    imie: 'Jan',
    nazwisko:   'Kowalski',
    rokUr: 1987

};

//Destruktur

//var { imie, rokUr} = person;
var {imie: im , rokUr: rok} = person;

console.log(`${im} urodzony w ${rok}`)
