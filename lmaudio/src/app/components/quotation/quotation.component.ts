import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  user:any = null;
  constructor( private authService:AuthService,) { }

  ngOnInit(): void {
    this.authService.getCurrentUserStatus()
    .subscribe((user)=>{
      this.user=user
      console.log(user)
    })
  }

}
