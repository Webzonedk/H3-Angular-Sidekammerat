import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallelogram',
  templateUrl: './parallelogram.component.html',
  styleUrls: ['./parallelogram.component.css']
})
export class ParallelogramComponent implements OnInit {

  area: number = 0;
  circum: number = 0;
  lengthG: number = 0;
  lengthS: number = 0;
  height: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  //There is no check if the numbers mach each other. so if both sides and height is filled, then they will calculate no matter what, and it can be wrong when

  //Call the other two methods
  calculate(lengthG: number, lengthS: number, height: number) {
    this.calculateArea(lengthG, height);
    this.calculateCircum(lengthG, lengthS);
  }

  //Calculate Area. But not filtering the circum. This is for version 2.0
  calculateArea(lengthAB: number, height: number): number {
    this.area = height * lengthAB;
    return this.area;
  }

  //Calculating circum
  calculateCircum(lengthG: number, lengthS: number): number {
    this.circum = (2 * lengthG) + (2 * lengthS);
    return this.circum;
  }


}
