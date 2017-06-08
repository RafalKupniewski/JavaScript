import { Edit } from './../serv/operations4';
import { AppComponent, hardware } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import {ReflectiveInjector} from '@angular/core';
@Component({
  selector: 'app-iphone-edit',
  templateUrl: './iphone-edit.component.html',
  styleUrls: ['./iphone-edit.component.css']
})
export class IphoneEditComponent implements OnInit {
  hardware: Array<any>;
  formEdit: FormGroup;

  model: AbstractControl;
  modelNew: AbstractControl;
  rokNew: AbstractControl;
  pojemnoscNew: AbstractControl;
  multipliedValue: any;
  edi: Edit;
  constructor(buldier: FormBuilder) { 
    this.hardware=hardware;
    var injector: any = ReflectiveInjector.resolveAndCreate([Edit]);
    this.edi = injector.get(Edit);
    this.formEdit= buldier.group({
      "model": ['', Validators.required],
      "modelNew": ['', Validators.required],
      "rokNew": ['', Validators.required],
      "pojemnoscNew": ['', Validators.required]
    });
        this.model = this.formEdit.controls['model'];
        this.modelNew = this.formEdit.controls['modelNew'];
        this.rokNew = this.formEdit.controls['rokNew'];
        this.pojemnoscNew = this.formEdit.controls['pojemnoscNew'];
  }
  edit(text: any) {
    this.hardware = this.edi.ed(text.model, text.modelNew, text.rokNew, text.pojemnoscNew, this.hardware);
  }
  ngOnInit() {
  }

}
