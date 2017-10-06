import {Component} from "@angular/core";
import {CartItem} from "../models/cart.model";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent{
  cartItems:CartItem[] = [];

  /**
   * Constructor injection of a service
   */
  constructor(private cs:CartService){
    //let cs:CartService = new CartService();
    this.cartItems = cs.getCartItems();
  }

  removeItem(idx:number){
    this.cs.removeFromCart(idx);
  }

  getTotal():number{
    let total = 0;
    for(let e of this.cartItems){
      total += e.price * e.qty;
    }
    return total;
  }
}
