import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }

  onClick(r:string):void{
   let newRoute:string="/";
   newRoute=newRoute.concat(r);
    this.route.navigate([newRoute]);
  }
  ngOnInit(): void {
  }

  
}
