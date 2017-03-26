//rest

function printArgs(prefix, ...args) {
    //args = [].slice().arguments
    args.forEach ( arg => console.log(prefix + ': ' + arg));

}
printArgs("liczba","dwa","trzy");


//spread

var tab = [1,2,3]
function add(x,y,z) {
    return x +y +z;
}

console.log(add.apply(null, tab));
console.log(add(...tab));
