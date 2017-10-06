import {Component} from "@angular/core";

@Component({
  selector: 'cartapp-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">{{cmpHeading}}</a>
      </div>
      <ul class="nav navbar-nav">
        <li> <a routerLink="/">Home</a> </li>
        <li> <a routerLink="/list">Shopping List</a> </li>
        <li> <a routerLink="/manage">Manage Components</a> </li>
        <li> <a routerLink="/offers">Offers</a> </li>
      </ul>
    </nav>
  `
})
export class HeaderComponent{
  cmpHeading:string="My Shopping Cart"
}
