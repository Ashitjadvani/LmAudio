import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Quot} from 'src/app/models/quot';
import {MessageService} from 'src/app/services/message.service'
import {QuotService } from 'src/app/services/quot.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-quot-item',
  templateUrl: './quot-item.component.html',
  styleUrls: ['./quot-item.component.css']
})
export class QuotItemComponent implements OnInit {
@Input() quot:Quot
  constructor(
    private quotService:QuotService,
    private messageService: MessageService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  remove(){
    this.quotService.removeQuot(this.quot.id).subscribe((data)=>{
      this.messageService.setMsg({msg:'Quotation Deleted!'})
    })
  }
  update(quotID:string){
    this.router.navigate(['/product/products/Quotation/edit',quotID])
  }

}
