import { Injectable } from '@angular/core';

@Injectable()
export class Delete {

    constructor() { }

    del(v1: any, v2: any) {
       for(let i = 0; i < v2.length; i++){
           if (v1 == v2[i].model)
               v2.splice(i, 1);
           
       }
        return v2;
    }
}