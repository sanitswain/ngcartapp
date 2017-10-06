import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component";
import {ShoppingModule} from "./shopping/shopping.module";
import {CartService} from "./services/cart.service";
import {ProductService} from "./services/product.service";
import {HomeComponent, ListComponent, ManageComponent, NotFoundComponent, OffersComponent} from "./routes.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ReversePipe} from "./app.pipe";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HomeComponent, OffersComponent,
    ListComponent, NotFoundComponent, ManageComponent, ReversePipe
  ],
  imports: [
    BrowserModule, ShoppingModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'list', component: ListComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'manage', component: ManageComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  //Services should be registered using providers
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

