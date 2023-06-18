import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AutomobileComponent} from "./components/automobile/automobile.component";
import {BusinessComponent} from "./components/business/business.component";
import {ArtsComponent} from "./components/arts/arts.component";
import {HealthComponent} from "./components/health/health.component";
import {TechnologyComponent} from "./components/technology/technology.component";
import {FoodComponent} from "./components/food/food.component";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'automobiles', component: AutomobileComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'health', component: HealthComponent },
  { path: 'technologies', component: TechnologyComponent },
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
