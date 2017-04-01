import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { CalculatorComponent }  from './calculator.component';

// import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CalculatorComponent
  ],
  bootstrap:    [
    CalculatorComponent
  ]
})
export class AppModule { }
