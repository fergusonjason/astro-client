import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HdComponent } from "./hd/hd.component";
import { YaleComponent } from "./yale/yale.component";
import { Ngc2000Component } from "./ngc2000/ngc2000.component";
import { GlieseComponent } from "./gliese/gliese.component";


const routes: Routes = [
  {path: "", redirectTo: "/hd", pathMatch: "full" },
  {path: "hd", component: HdComponent},
  {path: "yale", component: YaleComponent},
  {path: "ngc2000", component: Ngc2000Component},
  {path: "gliese", component: GlieseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
