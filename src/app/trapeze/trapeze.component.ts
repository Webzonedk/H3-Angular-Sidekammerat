import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trapeze',
  templateUrl: './trapeze.component.html',
  styleUrls: ['./trapeze.component.css']
})
//No inherit because this figure needs quite different values.
export class TrapezeComponent implements OnInit {

  area: number = 0;
  circum: number = 0;
  lengthAB: number = 0;
  lengthDC: number = 0;
  lengthAD: number = 0;
  lengthBC: number = 0;
  height: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }
  //Call the other two methods
  calculate(lengthAB: number, lengthDC: number, lengthAD: number, lengthBC: number, height: number) {
    this.calculateArea(lengthAB, lengthDC, height);
    this.calculateCircum(lengthAB, lengthDC, lengthAD, lengthBC);
  }
  //Calculate Area. But not filtering the circum. This is for version 2.0
  calculateArea(lengthAB: number, lengthDC: number, height: number): number {
    this.area = (lengthAB + lengthDC) * 0.5 * height;
    return this.area;
  }
  //Calculating circum
  calculateCircum(lengthAB: number, lengthDC: number, lengthAD: number, lengthBC: number): number {
    this.circum = lengthAB + lengthDC + lengthAD + lengthBC;
    return this.circum;
  }


}
