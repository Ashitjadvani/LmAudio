import { Component, OnInit } from '@angular/core';
import { coneStriped, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { CustomerService } from 'src/app/services/customer.service';
import { MessageService } from 'src/app/services/message.service';
import { Customer } from 'src/app/models/customer';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, Form, AbstractControl } from '@angular/forms';
import { ProductService } from "src/app/services/product.service";
import { Products } from 'src/app/models/products';
import { CurrencyPipe } from "@angular/common";
import { HttpClient, HttpHandler, HttpResponse, HttpErrorResponse, JsonpClientBackend } from "@angular/common/http";
import { first } from "rxjs/operators";
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {QuotService} from 'src/app/services/quot.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-quot-form',
  templateUrl: './quot-form.component.html',
  styleUrls: ['./quot-form.component.css']
})
export class QuotFormComponent implements OnInit {
  isHidden = false;
  customers: Customer[] = [];
  products: Products[] = [];
  productItem: FormArray;
  quotForm: FormGroup;
  // customer
  customerId: "";
  customerContact: "";
  customerEmail: "";
  customerAddress: "";
  customerRefarance: "";
  customerRefContact: "";
  myFormValueChanges$;
  totalSum: number = 0;
  totalQty: number = 0;
  proImage: string ;

 


  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private currencyPipe: CurrencyPipe,
    private router:Router,
    private builder:FormBuilder,
    private http: HttpClient,
    private quotService:QuotService


  ) { }

  ngOnInit(): void {
    this.getCustomer();
    this.getProducts();
    this.quotForm = this.formBuilder.group({
      id: new FormControl(''),
      cstName: new FormControl('', { validators: Validators.required }),
      cstContact: new FormControl('', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)] }),
      cstEmail: new FormControl('', { validators: [Validators.required, Validators.email] }),
      cstAddress: new FormControl('', { validators: Validators.required }),
      refName: new FormControl('', { validators: Validators.required }),
      refContact: new FormControl('', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)] }),
      productItem: this.formBuilder.array([this.addItemForm()]),
      totalAmount:new FormControl('',{validators:Validators.required}),
      totalQty:new FormControl('',{validators:Validators.required})

    });
    this.myFormValueChanges$ = this.quotForm.controls["productItem"].valueChanges;
    this.myFormValueChanges$.subscribe(productItem =>
      this.updateTotalProductPrice(productItem))
    this.myFormValueChanges$.subscribe(productItem =>
      this.updateTotalProductQty(productItem))
   
  }

  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
  }
  //-------GetCustomer.......................
  getCustomer() {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => {
        this.customers = customers;
      })


  }
  //-------GetProduct.......................
  getProducts() {
    this.productService.getProducts()
      .subscribe((products: Products[]) => {
        this.products = products;
      })
     
  }
  //------addItem(productItem)...........................
  addItem(): void {
    (<FormArray>this.quotForm.get("productItem")).push(this.addItemForm());
  }
  //-------CreateQuotItem..........................
  addItemForm(): FormGroup {
    return this.formBuilder.group({
      id:[''],
      proName: ['', Validators.required],
      proDetails: ['', Validators.required],
       proDescription:['',Validators.required],
       proPlacing:['',Validators.required],
       proImage:['',Validators.required],
      proQty: ['', Validators.required],
      proRate: ['', Validators.required],
      proAmount: ['',Validators.required],
    })

  }
 //--------ClearAllUnit..........................
  clearAllUnits() {
    const control = <FormArray>this.quotForm.controls["productItem"];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    // control.clearValidators();
    control.push(this.addItemForm());
  }
//---------UpdateTotalProductPrice................
  private updateTotalProductPrice(productItem: any) {
    const control = <FormArray>this.quotForm.controls["productItem"];
    this.totalSum = 0;
    for (const i in productItem) {
      let totalProductPrice = productItem[i].proQty * productItem[i].proRate;
      let totalProductPriceFormatted = this.currencyPipe.transform(
        totalProductPrice, "INR", "symbol-narrow",
        "1.2-2"
      );
      control.at(+i).get("proAmount").setValue(totalProductPriceFormatted, {
        onlySelf: true,
        emitEvent: false
      });
      this.totalSum += totalProductPrice;

    }
  }
//---------UpdateTotalProductQty...................
  private updateTotalProductQty(productItem: any) {
    const control = <FormArray>this.quotForm.controls["productItem"];
    this.totalQty = 0;
    for (const i in productItem) {
      let totalProductQty = productItem[i].proQty;

      control.at(+i);
      this.totalQty += totalProductQty;
    }

  }
//-------SetCustomer.........................
  selectCustomer(event) {
    this.customerId = event.id
    this.customerContact = event.cstContact
    this.customerEmail = event.cstEmail
    this.customerAddress = event.cstAddress
    this.customerRefarance = event.refName
    this.customerRefContact = event.refContact
  }
//------DeleteQuotItem.....................
  removeItem(i: number): void {
    const control = <FormArray>this.quotForm.controls['productItem'];
    control.removeAt(i);
  }
//-------PatchValue in array..................
  patchValues(id: any, i: any) {
    let x = (<FormArray>this.quotForm.controls['productItem']).at(i);
    console.log(x);
    
    
    x.patchValue({
      id:this.products.find(t=>t.id===id)?.id,
      proName:this.products.find(t=>t.id===id)?.proName,
      proDetails: this.products.find(t=>t.id=== id)?.proDetails,
      proDescription: this.products.find(t=>t.id=== id)?.proDescription,
      proImage: this.products.find(t=>t.id=== id)?.imageUrl,
      proPlacing: this.products.find(t=>t.id=== id)?.placing   
    });
 console.log(this.products.find(t=>t.id=== id)?.imageUrl)
  }
//-----------SetProduct in array..............
  selectProduct(event, i): void {
    const formData = {
      proName: event.target.value
    }
    console.log(formData, i);
    this.patchValues(event.target.value, i);
  }
//---------Uploadimage in form array.........
  uploadImage(event,i):void{
    const imageData={
      proImage:event.target.value
    }
    console.log(imageData,i)
    this.patchValues(event.target.value,i);
  }
  // resetForm(event){
  //   this.quotForm.reset({
      
  //   })
  
  // }
addQuot(quotForm:FormGroup):void{
  if (quotForm.value._id="") {
    this.quotService.addQuot(this.quotForm.value)
    .subscribe(()=>{
      this.messageService.setMsg({msg:"Quotation Added",type:"success"});
      this.router.navigate([])
    })
  } else {
    this.quotService.updateQuot(this.quotForm.value).subscribe(()=>{
      this.messageService.setMsg({msg:"Quotation Update!",type:"success"})
      this.router.navigate([])
    })
  }
}

}


