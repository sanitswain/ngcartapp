import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {CartItemsComponent} from "./cart-items.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DetailsComponent} from "./details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ProductListComponent, CartItemsComponent, DetailsComponent],
  exports: [ProductListComponent, CartItemsComponent],
  imports: [CommonModule, FormsModule,
  RouterModule.forChild([
    { path: 'details/:id', component:DetailsComponent }
  ])]
  /**
   * 1) We have used ngFor in our template which from CommonModule, so we need to import CommonModule here.
   *
   * 2) In cart-items component we have our quantity is a text field
   *    that is configured with two-way binding. Whenever the value in text field is changed that will directly reflect to the service
   *    contained model object and other way model value will also be rendered to this textfield. Two-way binding is only supported
   *    for form elements/components so we have imported FormsModule here.
   *
   * 3) To configure route mapping in root module use RouterModule.forRoot() and for featured module use RouterModule.forChild().
   */
})
export class ShoppingModule{

}
