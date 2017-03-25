
class Iphon{
    constructor(json){
    this.model = json.model;
    this.procesor = json.procesor;
    this.aparat = json.aparat;
    this.pojemnosc = json.pojemnosc;
    }
    toTableRow(){
		return `<tr><td>
		${this.model}
		</td><td>
		${this.procesor}
		</td><td>
        ${this.aparat}
		</td><td>
        ${this.pojemnosc}
		</tr>`;
	}
}

class ListaIphonow{
    constructor(){
    this.iphony = [];
    }
    dodajIphona(json) {
		this.iphony.push(new Iphon(json));
	}

    toTable() {
		let table = '<table><tr><th>Tytul</th> <th>Gatunek</th> <th>Ocena</th> <th>Studio</th></tr>';
		for(let i=0; i<this.iphony.length; i++) {
			table += this.iphony[i].toTableRow();
		}
		table += '</table>';
		return table;
	}
}

 


function init(){
let plik = new XMLHttpRequest();
plik.onload = reqListener;
plik.open("get", "./bazka.json", true);
plik.send();
let json;
function reqListener(e) {
   json = JSON.parse(this.responseText);
   ListaIphonow = new ListaIphonow();
    for(let i=0;json.length>i;i++){
        ListaIphonow.dodajIphona(json[i]);
    }
    let context = document.getElementById('table');
	context.innerHTML = ListaIphonow.toTable();

}
}

