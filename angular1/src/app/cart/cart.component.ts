import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products=[]
  cart=[]
  view:Boolean=false;
  constructor() {
    this.products=[{name:"Monitor",price:10000,company:"LG"},{name:"Printer",price:5000,company:"Canon"},{name:"Keyboard",price:2000,company:"Dell"},{name:"Mouse",price:600,company:"Logitech"},{name:"Cabinet",price:2000,company:"Intex"}]
   }
 
  ngOnInit() {
    
  }

  public AddToCart(i){
    let cartItem = this.products[i];
    this.cart.push(cartItem);
  }
  public RemoveFromCart(i){
    this.cart.splice(i,1)
  }

  public viewCart(){
    this.view = true;
  }
}
