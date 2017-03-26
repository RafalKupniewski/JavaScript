interface Person{
    imie: string;
    nazwisko?: string;
}

function sayHello(person: Person) {
console.log("I am" + person.imie);

}
sayHello({imie: 'Mis', nazwisko: 'Misiewicz'});