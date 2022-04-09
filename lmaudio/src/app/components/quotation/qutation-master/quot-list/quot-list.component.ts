import { Component, OnInit } from '@angular/core';
import { Quot } from 'src/app/models/quot';
import { MessageService } from 'src/app/services/message.service';
import { QuotService } from 'src/app/services/quot.service';

@Component({
  selector: 'app-quot-list',
  templateUrl: './quot-list.component.html',
  styleUrls: ['./quot-list.component.css']
})
export class QuotListComponent implements OnInit {

  quot:Quot[]=[]

  constructor(
    private quotService:QuotService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    this.getQuot()
    this.messageService.getMsg()
    .subscribe(()=>{
      this.getQuot()
    })
  }
  getQuot(){
    this.quotService.getQuot()
    .subscribe((quot:Quot[])=>{
      this.quot=quot;
    })
  }

}
