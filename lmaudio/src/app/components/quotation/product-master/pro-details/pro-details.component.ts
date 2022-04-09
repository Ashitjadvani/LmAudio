import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from "src/app/models/products";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit {

  product: Products=null;
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.productService.getSingleProduct(id)
      .subscribe(product => this.product = product);

  }

}
