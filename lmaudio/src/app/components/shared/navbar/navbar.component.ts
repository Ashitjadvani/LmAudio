import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any = null;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUserStatus()
    .subscribe((user)=>{
      this.user=user
      console.log(user)
    })
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  checkUser() {
    return JSON.parse(localStorage.getItem('user'));
    
  }

}
