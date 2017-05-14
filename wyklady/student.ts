interface Person{
    imie: string;
    nazwisko?: string;
}


class Student implements Person{
    constructor(public imie: string,public nazwisko: string){

    }
}

//let add = function(a: number, b: number):number{
//    return a + b;
//}

let add = (first: number, last: number) => number = function(a: number, b:number):number{
    return a + b;
}

//function sayHi(person: Person) {
//console.log("I am" + person.imie);
//}

function sayHi(person: {imie: string, nazwisko?: string}) {
    if (person.nazwisko) {
        console.log(`I am' ${person.imie} ${person.nazwisko}`);
    }
    else {
       console.log("I am" ${person.imie}); 
    }

}

let stud: Person = new Student('Jan','Kowalski')
stud.imie='Jadzka'
sayHi(stud);