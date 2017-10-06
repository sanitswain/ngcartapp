import {CartItem} from "../models/cart.model";
import {Injectable} from "@angular/core";

/**
 *
 * 2. Register service in module
 */

@Injectable()
export class CartService{
  private cartItems:CartItem[];

  constructor(){
    this.cartItems = [];
  }

  public getCartItems():CartItem[]{
    return this.cartItems;
  }

  public addToCart(newItem:CartItem){
    this.cartItems.push(newItem);
  }

  removeFromCart(idx:number){
    this.cartItems.splice(idx, 1)
  }
}
