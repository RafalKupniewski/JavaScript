let family = {
    persons: ['bolek','lolek','tola'],
    lastName: 'Kowalski',
    sayHello: function() {
        var self = this
        return this.persons.map(function(person){
            return person + " " + self.lastName;
        });
    } 
}

console.log(family.sayHello());

