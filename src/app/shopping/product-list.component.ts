import {Component} from "@angular/core";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/cart.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{
  products:Product[] = [];

  constructor(private crts:CartService, private ps:ProductService){
    //let ps:ProductService = new ProductService();
    //this.products = ps.getProducts();

    ps.getProducts().subscribe(
      (jsonresp) => this.products = jsonresp.json(),
      (err)=> console.log()
    );
  }

  addItemToCart(selectedProduct:Product){
    let item:CartItem = new CartItem(selectedProduct.pname, selectedProduct.price, 1);
    this.crts.addToCart(item);
  }
}
