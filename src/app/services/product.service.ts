import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService{

  private productsData:Product[];
  PRODUCTS_URL = 'http://localhost:2403/wsproducts';

  /*
  constructor(){
    this.productsData = [
      new Product('101', 'Galaxy S', 17000, 'Samsung Galaxy'),
      new Product('102', 'Watch', 3800, 'Fasttack watch'),
      new Product('103', 'Wallet', 850, 'Leather Wallet'),
      new Product('104', 'Laptop', 60500, 'Dell Laptop')
    ];
  }

  public getProducts():Product[]{
    return this.productsData;
  }
  */

  /**
   * Here Http is a framework maintained class created by angular.
   * Framework is marked with @Injectable and addedd into providers in HttpModule.
   */
  constructor(private _http:Http){

  }

  public getProducts():Observable<Response>{
    return this._http.get(this.PRODUCTS_URL);
  }

  addProduct(newProduct:Product){
    return this._http.post(this.PRODUCTS_URL, newProduct);
  }

  deleteProduct(pid:string){
   return this._http.delete(this.PRODUCTS_URL + "/"+pid);
  }

  getProductById(pid:string){
    return this._http.get(this.PRODUCTS_URL + "/" + pid);
  }
}
