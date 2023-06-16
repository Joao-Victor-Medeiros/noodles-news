import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AutomobileComponent} from "./components/automobile/automobile.component";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'automobiles', component: AutomobileComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
