import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { MessageService } from "src/app/services/message.service";
import { Products } from "src/app/models/products";
@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css']
})
export class ProListComponent implements OnInit {

products: Products[]=[];
  constructor(
    private productService:ProductService,
    private messageService:MessageService,
  ) { }

  ngOnInit(): void {
   this.getProducts()
   this.messageService.getMsg()
   .subscribe(()=>{
     this.getProducts()
   })
  }
  getProducts(){
    this.productService.getProducts()
    .subscribe((products:Products[])=>{
      this.products =products;
    })
   
  }

  
  // handleClick() {
  //   console.log(this.query);
  // }

}
