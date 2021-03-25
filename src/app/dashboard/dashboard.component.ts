import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  parkingZones:any
  constructor(private parkingService:ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParkingZones().subscribe(
      res=>{this.parkingZones=res; this.parkingZones.push({id:"",parkingZoneTitle:"All Zone"})}
    )
   
    console.log("parkin",this.parkingZones)
  }
  
}
