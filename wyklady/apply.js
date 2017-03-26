function kwaKwa(){
    console.log(this.name + " says : kwa kwa ");
}

var kaczka ={
    name:'kaczka dziwaczka'
}

kwaKwa.apply(kaczka,null);
