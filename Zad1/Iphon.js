
function Iphon(json){
    
    var self = this;
    self.model = json.model;
    self.procesor = json.procesor;
    self.aparat = json.aparat;
    self.pojemnosc = json.pojemnosc;

    self.toTableRow = function(){
		return '<tr><td>'
		+ self.model
		+ '</td><td>'
		+ self.procesor
		+ '</td><td>'
        + self.aparat
		+ '</td><td>'
        + self.pojemnosc
		+ '</td></tr>';
	}
}
function ListaIphonow(){
    var iphony = []
    var self = this;

	ListaIphonow.prototype.dodajIphona=function(json){
		iphony.push(new Iphon(json))
	}

    //self.dodajIphona = function(json) {
	//	iphony.push(new Iphon(json));
	}

    self.toTable = function() {
		var table = '<table>';
		table += generateTableHeader();
		for(var i=0; i<iphony.length; i++) {
			table += iphony[i].toTableRow();
		}
		table += '</table>';
		return table;
	}

    var generateTableHeader = function() {
		return '<tr><th>Model</th> <th>Procesor</th> <th>Aparat</th> <th>Pojemnosc</th></tr>';
	}
	

}
function init(){
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "./bazka.json", true);
oReq.send();
var json;
function reqListener(e) {
   json = JSON.parse(this.responseText);
   ListaIphonow = new ListaIphonow();
    for(var i=0;json.length>i;i++){
        ListaIphonow.dodajIphona(json[i]);
    }

    var context = document.getElementById('table');
	context.innerHTML = ListaIphonow.toTable();
}

   // console.log(json);

}
