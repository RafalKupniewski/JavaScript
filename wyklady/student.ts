interface Person{
    imie: string;
    nazwisko?: string;
}


class Student implements Person{
    constructor(public imie: string,public nazwisko: string){

    }
}

function sayHi(person: Person) {
console.log("I am" + person.imie);
}

let stud = new Student('Jan','Kowalski')

sayHi(stud);