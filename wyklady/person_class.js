class Person {
    constructor(imie){
        this.imie = imie;
    }

    sayHello() {
        return "I am "+ this.imie
    }
}

let jas = new Person('Jan');
console.log(jas.sayHello());