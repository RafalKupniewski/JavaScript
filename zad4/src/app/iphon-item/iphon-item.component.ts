import {  Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iphon-item',
  templateUrl: './iphon-item.component.html',
  styleUrls: ['./iphon-item.component.css']
})
export class IphonItemComponent implements OnInit {
@Input()
name: string;
@Output()
clickEmitter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  iphoneSelected() {
    console.log(`nazwa sprzetu:`);
    this.clickEmitter.emit(this.name);
  }
}
