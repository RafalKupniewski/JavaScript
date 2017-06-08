import { Delete } from './../serv/operations2';
import { Component, OnInit } from '@angular/core';
import {AddItem} from '../serv/operations';
import {ReflectiveInjector} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { hardware } from  './../app.component';

@Component({
  selector: 'app-iphone-delete',
  templateUrl: './iphone-delete.component.html',
  styleUrls: ['./iphone-delete.component.css']
})
export class IphoneDeleteComponent implements OnInit {
 hardware: Array<any>;
  formDelete: FormGroup;

  model: AbstractControl;
  multipliedValue: any;
  de: Delete;
  constructor(buldier: FormBuilder) {
   this.hardware=hardware;
    var injector: any = ReflectiveInjector.resolveAndCreate([Delete]);
    this.de = injector.get(Delete);
   
    this.formDelete = buldier.group({
      "model": ['', Validators.required]
    });
        this.model = this.formDelete.controls['model'];
   }
deleteIphone(text: any) {

    this.hardware = this.de.del(text.model, this.hardware);


  }
  ngOnInit() {
  }

}
