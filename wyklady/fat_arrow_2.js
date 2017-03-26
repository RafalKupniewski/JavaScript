let family = {
    persons: ['bolek','lolek','tola'],
    lastName: 'Kowalski',
    sayHello: function() {
        return this.persons.map((person) => person + " " +this.lastName);
              
    } 
}

console.log(family.sayHello());

let someFunction = (name) => "i am " + name;

console.log(someFunction("jadwiga"));
 