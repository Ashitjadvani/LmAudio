import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from "src/app/services/product.service";
import { Products } from "src/app/models/products";
import { file } from 'ngx-bootstrap-icons';


@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.css']
})
export class ProFormComponent implements OnInit {

  productForm: FormGroup
  imageUrl: string ;
  formDirty: boolean = false;


  constructor(
    private router: Router,
    private builder: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productForm = this.builder.group({
      _id: ['', Validators.required],
      proName: ['', Validators.required],
      proDetails: ['', Validators.required],
      proDescription: ['', Validators.required],
      placing: ['', Validators.required],
      imageUrl: ['', Validators.required],

      
    })
    this.route.paramMap.subscribe(params => {
      const proId = params.get('id');
      if (proId) {
        this.getSingleProduct(proId)
      }
    })
  }
  getSingleProduct(id: string) {
    this.productService.getSingleProduct(id).subscribe(
      (products: Products) => this.update(products),
      (err: any) => console.log(err)
    )
      
  }

  uploadImage(event) {
    this.productService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.imageUrl = res.imageUrl
        
      })
 
  }
  
  addProduct(productForm: FormGroup) {
    // const data = {
    //   ...this.productForm.value,
    //   imageUrl: this.imageUrl
    // }

    // this.productService.addProduct(data)
    //   .subscribe(() => {
    //     this.messageService.setMsg({ msg: 'Product Added!', type: 'success' });
    //     this.router.navigate(['/product'])
        
    //   })



    const data = {
      ...this.productForm.value,
      imageUrl: this.imageUrl
    }
    this.productService.addProduct(data)
      .subscribe(() => {
        this.messageService.setMsg({ msg: 'Product Added!', type: 'success' });
        this.router.navigate(['/product'])
        console.log(this.productForm.value)
      })
  }

  update(products: Products): void {
    this.productForm.patchValue({
      _id: products._id,
      proName: products.proName,
      proDetails: products.proDetails,
      proDescription: products.proDescription,
      placing: products.placing,
      imageUrl: products.imageUrl
      
      
    })

  }
}
