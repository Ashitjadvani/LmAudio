import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MessageService } from 'src/app/services/message.service';
import { Customer } from 'src/app/models/customer';
@Component({
  selector: 'app-cst-list',
  templateUrl: './cst-list.component.html',
  styleUrls: ['./cst-list.component.css']
})
export class CstListComponent implements OnInit {


  customers:Customer[]=[];

  constructor(
    private customerService:CustomerService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.getCustomer()
    this.messageService.getMsg()
    .subscribe(()=>{
      this.getCustomer()
    })
  }
  getCustomer(){
    this.customerService.getCustomers()
    .subscribe((customers:Customer[])=>{
      this.customers=customers;
    })
  }



}
