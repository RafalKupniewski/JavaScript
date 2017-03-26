function Phone(json){
    var self = this;
    self.ID = json.ID;
    self.model = json.model;
    self.generation = json.generation;
    self.memory = jsom.memory;
    self.name = json.name; 
}

self.toTable = function(){
return '<tr><td>'
    +json.ID
    +'<tr><td>'
    +self.model
    +'<tr><td>'
    +self.generation 
    +'<tr><td>'
    +self.memory
    +'<tr><td>'
    self.name
    +'<tr><td>'
}

self.fullId = function(){
    return sum(self.model,self.generation,self.memory,self.name) 
}

var sum = function(a,b){
    return a+" "+b;
}

function ListPhone(){
    var phone=[];
    var self = this;
    self.addPhone = function(json){
        phone.push(new Phone(json));
    }

    self.toTable = function(){
        var table = '<table>';
        table += generateTableHeader();
        for(var i =0;i<phone.length;i++){
            table += phone[i].toTable();
        }
        table+='</table>'
        return table
    }

    var generateTableHeader= function(){
        return '<tr><th>ID</th> <th>model</th> <th>generation</th> <th>memory</th> <th>name</th> </tr>';
    }

    //self.clear(){
      //  phone = [];
 //   }
}


function init(){
    var ListPhone = new ListPhone();
    for(var i=0;i<data.length;i++){
        ListPhone.addPhone(data[i]);
    }
    var context = document.getElementById('table');
    context.innerHTML = ListPhone.toTable();
}



