import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iphone-details',
  templateUrl: './iphone-details.component.html',
  styleUrls: ['./iphone-details.component.css']
})
export class IphoneDetailsComponent implements OnInit {


@Input()
iphone: string;
@Input()
zwin: boolean;
@Output()
clickEmitter: EventEmitter<string> = new EventEmitter();
  constructor() {
        this.zwin=true;
   }

  ngOnInit() {
  }

  iphoneClicked() {
    this.clickEmitter.emit(this.iphone);
    this.zwin = !this.zwin;


  }
}
