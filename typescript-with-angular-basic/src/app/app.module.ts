import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HdComponent } from './hd/hd.component';

import { AstroService } from './astro.service';
import { YaleComponent } from './yale/yale.component';
import { MatTableModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HdComponent,
    YaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [AstroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
