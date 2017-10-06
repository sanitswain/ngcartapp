import {Component} from "@angular/core";
import {Product} from "./models/product.model";
import {ProductService} from "./services/product.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  template: `<h3>Welcome to shopping site
    <br>Price: {{price | currency:"INR":1 | lowercase}}
    <br>Today: {{myDate | date:'dd-MMM-yyyy'}}
    <br>Product: {{productname | uppercase | reverseText}}
  </h3>
  <!-- <iframe [src]="myVideoUrl" width="75%" height="400px"></iframe> -->
  <iframe [src]="trustUrl" width="50%" height="300px"></iframe>
  `
})
export class HomeComponent{
  price = 100.1234;
  myDate = new Date();
  productname = 'Sony TV';
  myVideoUrl = "https://www.youtube.com/embed/gtMkq6IxVKk";
  trustUrl:SafeResourceUrl;

  constructor(ds:DomSanitizer){
    this.trustUrl = ds.bypassSecurityTrustResourceUrl(this.myVideoUrl);
  }
}


@Component({
  template: `
    <div class="col-sm-6">
      <product-list></product-list>
    </div>

    <div class="col-sm-6 well">
      <cart-items></cart-items>
    </div>
  `
})
export class ListComponent{

}



@Component({
  template: `<h3>Checkout our exclusive offers</h3>`
})
export class OffersComponent{

}


@Component({
  template: `<h3 class="well">404: Page not found</h3>`
})
export class NotFoundComponent{

}

@Component({
  templateUrl: './manage.component.html'
})
export class ManageComponent{
  mgproducts:Product[] = [];
  formProduct:Product = new Product('', '', 0, '');

  constructor(private ps:ProductService){
    //this.mgproducts = ps.getProducts();
    ps.getProducts().subscribe(
      (jsonresp) => {
        //console.log(jsonresp);
        //console.log(jsonresp.json());
        this.mgproducts = jsonresp.json();
      },
      (err) => console.error(err)
    );
  }

  saveProduct(){
    this.ps.addProduct(this.formProduct).subscribe(
      (jsonresp) => {

        if(this.formProduct.id != null){
          let idx = this.mgproducts.findIndex(prd =>prd.id == this.formProduct.id);
          this.mgproducts[idx] = this.formProduct;

        }else{
          this.mgproducts.push(jsonresp.json());
        }

        this.formProduct = new Product('', '', 0, '');
      },
      (err) => console.error(err)
    )
  }

  removeProduct(id:string, idx:number){
    this.ps.deleteProduct(id).subscribe(
      (jsonresp) => {
          this.mgproducts.splice(idx, 1);
      },
      (err) => console.log(err)
    );
  }

  editProduct(selectedProduct:Product){
    //this.formProduct = selectedProduct;

    /**
     * For cloning, otherwise they will point to same object
     */

    Object.assign(this.formProduct, selectedProduct);
  }

}
