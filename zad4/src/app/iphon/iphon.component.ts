import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphon',
  templateUrl: './iphon.component.html',
  styleUrls: ['./iphon.component.css']
})
export class IphonComponent implements OnInit {
  modelIp: string[];

  constructor() { 
        this.modelIp = ['iphone 7', 'iphone se', 'iphone 6'];

  }

  ngOnInit() {
  }
iphoneClicked(mo: string){
  console.log(`${mo}`)
}
}
