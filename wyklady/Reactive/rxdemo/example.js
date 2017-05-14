//npm install @reactivex/rxjs --save-dev
var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.range(0, 4).map(x => x * 2).filter(x => x < 6);
var observer = {
    next: x => console.log(`Next ${x}`),
    error: x => console.log('Error '),
    complete: () => console.log('Completed')
};
source.subscribe(observer);

var source2 = Rx.Observable.create(observer => {
    console.log('Rozpoczynam nadawanie');
    observer.next("Hello");
    observer.next(" World ");
    observer.next(" on Sunday!");
    // observer.onCompleted();
});

source2.subscribe({ next: x => console.log(x) });