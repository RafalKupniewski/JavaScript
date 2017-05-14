var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.range(0, 4).map(x => x * 2).filter( x=> x<6) ;

var observer = {
next: x => console.log(`Next ${x}`),
error: x => console.log(`Error `),
complete: () => console.log(`Complete`)
};

//var subscription = source.subscribe(observer);
//source.subscribe(observer);

var source2 =Rx.Observable.create ( x => {
console.log('rozpoczynam');
observer.next("Hello");
observer.next("Worls");

});

source2.subscribe({ next: x => console.log(x) });
