var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
       let table = document.getElementById("table");

           while(table.rows.length > 1) {
               table.deleteRow(1);
            }
    })
    .subscribe(function(x) {
        let table = document.getElementById("table")
        let i = 0;
        if (x[1] != undefined){
        while (i < x[1].length){
            let row = table.insertRow(i+1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML =	`<p align="center"> <a href=${x[3][i]} target="_blank">${x[1][i]}</a></p>`;
            cell2.innerHTML = x[2][i];
            i++;
        }
    }
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://pl.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}
