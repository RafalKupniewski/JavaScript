import { Injectable } from '@angular/core';

@Injectable()
export class AddItem {

    constructor() { }

    add(v1: any, v2: any, v3: any, v4: any) {
       v4.push({model : v1, rok : v2, pojemnosc: v3});
        return v4;
    }
}