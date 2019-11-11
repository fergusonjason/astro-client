import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import {AstroService} from "src/app/astro.service";
import { HdComponent } from "./hd/hd.component";
import { MaterialModule } from "./material.module";
import { YaleComponent } from "./yale/yale.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Ngc2000Component } from "./ngc2000/ngc2000.component";

@NgModule({
  declarations: [
    AppComponent,
    HdComponent,
    YaleComponent,
    Ngc2000Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AstroService],
  bootstrap: [AppComponent]
})
export class AppModule {

  sidenavOpened: boolean = false;

  closeSidenav = () => {
    this.sidenavOpened = false;
  }
}
