import { Component, OnInit } from '@angular/core';
import { Pal } from './pal';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {
  //name: String;
  name: Pal = { name: "Andreas B. Nielsen" } // Using the interface to fill in name

  constructor() {
    //this.name = "Andreas B. Nielsen"
  }

  ngOnInit(): void {
  }

}

// export interface Pal {
//   name: String;
// }
