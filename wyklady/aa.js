function counter(){
    var i=0;
    return function (){
        return ++i;
    }
}

var inc1 = counter();

console.log(inc1());
console.log(inc1());
console.log(inc1());