import { Component, OnInit } from '@angular/core';
import {AddItem} from '../serv/operations';
import {ReflectiveInjector} from '@angular/core';

import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {
 hardware: Array<any>;
 myForm: FormGroup;

  model: AbstractControl;
  rok: AbstractControl;
  pojemnosc: AbstractControl;
  dodaj: AddItem;
  constructor(fb: FormBuilder) {
    const injector: any = ReflectiveInjector.resolveAndCreate([AddItem]);
    this.dodaj = injector.get(AddItem);
    this.hardware = [
    { "model": "iPhone 7",  "rok": "2016", "pojemnosc": "256"},
    { "model": "iPhone 6s",  "rok": "2015", "pojemnosc": "128"},
    { "model": "iPhone 5c",  "rok": "2013", "pojemnosc": "32"},
];
    this.myForm = fb.group({
      "model": ['', Validators.required],
      "rok": ['', Validators.required],
      "pojemnosc": ['', Validators.required],
    });
        this.model = this.myForm.controls['model'];
        this.rok = this.myForm.controls['rok'];
        this.pojemnosc = this.myForm.controls['pojemnosc'];
   

   }

  ngOnInit() {
  }

  add(value: any) {

    this.hardware = this.dodaj.add(value.model, value.rok, value.rok, this.hardware);


  }

}
