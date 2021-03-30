import { Component, Input, OnInit } from '@angular/core';
import { report } from '../parking.service';

@Component({
  selector: 'app-parkingreport',
  templateUrl: './parkingreport.component.html',
  styleUrls: ['./parkingreport.component.css']
})
export class ParkingreportComponent implements OnInit {
    showTable:boolean=false
    constructor() { }

  @Input("zoneReport") zoneReport!:report

  ngOnInit(): void {
    
  }

  onClick():void{
    this.showTable=!this.showTable
  }

}
