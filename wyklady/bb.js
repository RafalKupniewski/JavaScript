var lib ={};
lib.module=(function(){
    var im = "Jan";
    var na = "Kowalski";
    return {
        imie: " " + im + na,
        przedstawSie: function () {
            console.log("Dane " + im + " " + na);
        }
    }
})();

console.log(lib.module.imie);
lib.module.przedstawSie();