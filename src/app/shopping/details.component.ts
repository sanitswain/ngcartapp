import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component({
  template: `
    <h3>Product Information</h3><hr>
    <table class="well table table-bordered" style="width: 40%">
      <tr> <th>Id</th> <td>{{dtProduct.id}}</td> </tr>
      <tr> <th>Name</th> <td>{{dtProduct.pname}}</td> </tr>
      <tr> <th>Price</th> <td>{{dtProduct.price}}</td> </tr>
      <tr> <th>Description</th> <td>{{dtProduct.description}}</td> </tr>
    </table>
    <button class="btn btn-primary btn-sm" (click)="goBack()">Goto Products list</button>
  `
})
export class DetailsComponent{

  dtProduct:Product = new Product('', '', 0, '');

  constructor(private actroute:ActivatedRoute, private ps:ProductService, private router:Router){
    let pathId = this.actroute.snapshot.params['id'];
    //console.log(pathId);
    this.ps.getProductById(pathId).subscribe(
      (jsonresp) => {
        //console.log(jsonresp)
        this.dtProduct = jsonresp.json();
      },
      (err) => console.error(err)
    );
  }

  goBack(){
    this.router.navigate(['/list']);
  }
}
