import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
// import { MatFormFieldModule } from "@angular/material/form-field";
import { MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";

const components = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTableModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
