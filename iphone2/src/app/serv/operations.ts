import { Injectable } from '@angular/core';

@Injectable()
export class AddItem {

    constructor() { }

    add(a: any, b: any, c: any, d: any) {
       d.push({model : a, rok : b, pojemnosc: c});
        return d;
    }
}