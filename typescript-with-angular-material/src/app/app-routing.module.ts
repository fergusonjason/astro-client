import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HdComponent } from "./hd/hd.component";
import { YaleComponent } from "./yale/yale.component";
import { YaleModule } from "./yale/yale.module";
import { Ngc2000Component } from "./ngc2000/ngc2000.component";


const routes: Routes = [
  {path: "", redirectTo: "/hd", pathMatch: "full" },
  {path: "hd", component: HdComponent},
  {path: "yale", component: YaleComponent},
  {path: "ngc2000", component: Ngc2000Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
