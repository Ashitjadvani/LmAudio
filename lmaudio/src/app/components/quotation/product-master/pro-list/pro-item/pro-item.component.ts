import { Component, Input, OnInit,SimpleChange } from '@angular/core';
import { Products } from 'src/app/models/products';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.css']
})
export class ProItemComponent implements OnInit {

  @Input() products:Products

  constructor(
    private productService:ProductService,
    private messageService:MessageService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(changes)
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('Inside On Destroy')
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('After view init.')
  }
  remove() {
    this.productService.removeProduct(this.products.id).subscribe((data) => {
      this.messageService.setMsg({ msg: 'Post Deleted!', type: 'success' })
    })
    console.log(this.products.id)
  }
  update(productId:String){
    this.router.navigate(['product/products/edit',productId])
  }
}
