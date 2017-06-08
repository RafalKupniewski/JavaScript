import { Injectable } from '@angular/core';

@Injectable()
export class Search {

    constructor() { }

    ser(v1: any, v2: any) {
        var out = [];
        for(let i=0;i<v2.length;i++)
            if(v2[i].rok === v1.value)
                out.push(v2[i].model);
            if (out.length==0)
                out.push('empty');
            

        return out;
    }
}