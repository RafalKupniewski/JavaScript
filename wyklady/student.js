var Student = (function () {
    function Student(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    return Student;
}());
function sayHi(person) {
    console.log("I am" + person.imie);
}
var stud = new Student('Jan', 'Kowalski');
sayHi(stud);
