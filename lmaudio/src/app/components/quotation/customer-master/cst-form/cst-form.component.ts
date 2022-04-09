import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from "src/app/services/customer.service";
import { MessageService } from "src/app/services/message.service";
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-cst-form',
  templateUrl: './cst-form.component.html',
  styleUrls: ['./cst-form.component.css']
})
export class CstFormComponent implements OnInit {

  customerForm: FormGroup
  formDirty: boolean = false

  constructor(
    private customerService: CustomerService,
    private messageservice: MessageService,
    private router: Router,
    private builder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.customerForm = this.builder.group({
      _id: new FormControl(''),
      cstName: new FormControl('', { validators: Validators.required }),
      cstContact: new FormControl('', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)] }),
      cstEmail: new FormControl('', { validators: [Validators.required, Validators.email] }),
      cstAddress: new FormControl('', { validators: Validators.required }),
      refName: new FormControl('', { validators: Validators.required }),
      refContact: new FormControl('', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)] }),
    })
    this.route.paramMap.subscribe(params => {
      const cstId = params.get('id');
      if (cstId) {
        this.getSingleCustomer(cstId)
      }
    })
  }
  getSingleCustomer(id: string) {
    this.customerService.getSingleCustomer(id).subscribe(
      (customer: Customer) => this.update(customer),
      (err: any) => console.log(err)
    );
  }


  handleChange() {
    this.formDirty = true;
  }

  addCustomer(customerForm:FormGroup): void {
    if (customerForm.value._id="") {
      this.customerService.addCustomer(this.customerForm.value)
      .subscribe(() => {
        this.messageservice.setMsg({ msg: "Customer Added!", type: "success" });
        this.formDirty = false;
        this.router.navigate(['product/products/customer/list'])
      })
    } else {
      this.customerService.updateCustomer(this.customerForm.value)
      .subscribe(() => {
        this.messageservice.setMsg({ msg: "Customer Updated!", type: "success" });
        this.formDirty = false;
        this.router.navigate(['product/products/customer/list'])
      })
    }
    
  }
  update(customer: Customer): void {
    this.customerForm.patchValue({
      _id: customer._id,
      cstName: customer.cstName,
      cstContact: customer.cstContact,
      cstEmail: customer.cstEmail,
      cstAddress: customer.cstAddress,
      refName: customer.refName,
      refContact: customer.refContact
    })

  }


}
