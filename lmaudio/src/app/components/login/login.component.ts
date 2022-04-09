import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private router : Router,
    private authService:AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('Inside login on destroy')
  }
  login() {
    this.authService.login(this.model)
      .subscribe(() => {
        this.router.navigate(['/product']);
      }, (err) => {
        this.messageService.setMsg({ msg: 'Invalid Credentials.', type: 'danger' })
      })
    // if (this.authService.login(this.model)) {
    //   this.router.navigate(['/profile']);
    // } else {
    //   this.messageService.setMsg({ msg: 'Invalid Credentials.', type: 'danger' })
    // }
  }

}
