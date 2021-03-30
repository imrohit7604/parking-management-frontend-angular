import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, userResponse } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router,private authSerivce:AuthService) { 
  }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('JWTToken')!);
    this.userInfo=JSON.parse(localStorage.getItem('userInfo')!);
  }

  token:any
  userInfo!:userResponse

  onClick(r:string):void{
   let newRoute:string="/";
   newRoute=newRoute.concat(r);
    this.route.navigate([newRoute]);
  }

  onLogoutClick(){
    this.authSerivce.logout();
    this.token=null
    this.route.navigate(["/login"]);
  }
  

  
}
