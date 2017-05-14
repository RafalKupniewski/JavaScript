var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        console.log(x);
    })
    .subscribe(function(x) {
        $('#results').text(x);
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}