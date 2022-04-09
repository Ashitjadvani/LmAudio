import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { MessageService } from 'src/app/services/message.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-cst-item',
  templateUrl: './cst-item.component.html',
  styleUrls: ['./cst-item.component.css']
})
export class CstItemComponent implements OnInit {

  @Input() customers: Customer

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  remove() {
    this.customerService.removeCustomer(this.customers.id).subscribe((data) => {
      this.messageService.setMsg({ msg: 'Customer Deleted!', type: 'success' })
    })
  }
  update(customerID:String) {
   this.router.navigate(['/product/products/customer/edit',customerID])
  }

}
