import {Component, OnInit}from '@angular/core';



expty class MainComponent implements OnInit {

    adder: Adder;
    addedValue = 0;

    constructor() {}
    add(a: number, b:number){ return a+b}
}




