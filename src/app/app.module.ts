import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './Components/grid/grid.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListComponent } from './Components/list/list.component';
import { TwoBoxesComponent } from './Components/two-boxes/two-boxes.component';
import { CardsComponent } from './Components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NavbarComponent,
    ListComponent,
    TwoBoxesComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
