import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPalComponent } from './my-pal/my-pal.component';
import { GeometriComponent } from './geometri/geometri.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { ParallelogramComponent } from './parallelogram/parallelogram.component';
import { TrapezeComponent } from './trapeze/trapeze.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyPalComponent,
    GeometriComponent,
    RectangleComponent,
    SquareComponent,
    ParallelogramComponent,
    TrapezeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
