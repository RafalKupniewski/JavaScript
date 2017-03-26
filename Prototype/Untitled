var Person = (function(){
var age = 23;

function Person(imie,nazwisko){
  this.imie=imie;
  this.nazwisko=nazwisko;
};
Person.prototype.sayHello = function() {
  return "I am"+ this.imie +" of " + age;

}

Person.prototype.sayAge = function() {
  return "I am of " + age ;
}
return Person;

})();

var p1 = new Person('Jan', 'Kowalski');
p1.imie = 'Zenek';
p1.age = 18;

concole.log(p1.sayHellp());
