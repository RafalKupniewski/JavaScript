import { Injectable } from '@angular/core';

@Injectable()
export class Edit {

    constructor() { }

    ed(v1: any, v2: any, v3: any, v4: any,  v5: any) {
        for(let i = 0; i < v5.length; i++){
           if (v1 === v5[i].model){
               v5[i].model = v2;
               v5[i].rok = v3;
               v5[i].pojemnosc = v4;
           }
       }
        return v5;
    }
}