import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MultiplesComponent } from './multiples/multiples.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MultiplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
