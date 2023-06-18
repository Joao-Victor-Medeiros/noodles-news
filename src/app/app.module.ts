import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './components/home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderComponent} from './shared/header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {AppRoutingModule} from './app-routing.module';
import {AutomobileComponent} from './components/automobile/automobile.component';
import {BusinessComponent} from './components/business/business.component';
import {ArtsComponent} from './components/arts/arts.component';
import {HealthComponent} from './components/health/health.component';
import {TechnologyComponent} from './components/technology/technology.component';
import {FoodComponent} from './components/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AutomobileComponent,
    BusinessComponent,
    ArtsComponent,
    HealthComponent,
    TechnologyComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
