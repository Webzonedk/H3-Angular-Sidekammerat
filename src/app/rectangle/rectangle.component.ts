import { Component, OnInit } from '@angular/core';
import { Shapes } from '../Classes/shapes';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})

export class RectangleComponent extends Shapes implements OnInit {

  area: number = 0;
  circum: number = 0;
  length: number = 0;
  height: number = 0;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  //Calling the two methods
  calculate(width: number, height: number) {
    this.calculateArea(width, height);
    this.calculateCircum(width, height);
  }
  //Calculating Area
  calculateArea(width: number, height: number): number {
    this.area = width * height;
    return this.area;
  }
  //Calculating Circum
  calculateCircum(width: number, height: number): number {
    this.circum = width * 2 + height * 2;
    return this.circum;
  }


}
