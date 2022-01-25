import { Component, OnInit } from '@angular/core';
import { Shapes } from '../Classes/shapes';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent extends Shapes implements OnInit {

  area: number = 0;
  circum: number = 0;
  length: number = 0;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  //Calling the two methods
  calculate(length: number) {
    this.calculateArea(length);
    this.calculateCircum(length);
  }
  //Calculating the Area
  calculateArea(length: number): number {
    this.area = length * length;
    return this.area;
  }
  //Calculating Circum
  calculateCircum(length: number): number {
    this.circum = length *4;
    return this.circum;
  }


}
