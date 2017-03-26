var Person = (function() {

    function Person(imie) {
        this.imie = imie
    }
    Person.prototype.sayHello= function() {
        return 'Hello ' + this.imie;
    };
    return Person;

}());

var jan = new Person('jan');
console.log(jan.sayHello());

