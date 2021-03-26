import { Component, OnInit } from '@angular/core';
import { ParkingService, space, zone } from '../parking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  parkingZones:any
  parkingSpaces:any
  parkingReport:any

  constructor(private parkingService:ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParkingZones().subscribe(
      res=>{this.parkingZones=res; this.parkingZones.push({id:"",parkingZoneTitle:"All Zone"})}
    )
   this.parkingService.getZoneSpaces().subscribe(
     res=>{this.parkingSpaces=sortByAsec(res); }
   ) 
   this.parkingService.getParkingReport(new Date()).subscribe(
     res=>{this.parkingReport=res;console.log(res)}
   )
  }
  
  onZoneClick(zone:zone):void{
    console.log("zone select",zone)
    this.parkingService.getZoneSpaces(zone._id).subscribe(
      res=>{this.parkingSpaces=sortByAsec(res); }
    )
  }

}


function sortByAsec(res: any): any {
 
  res.sort(function (a:any, b:any) {
    return a.value - b.value;
  });

  res.sort(function (a:space, b:space) {
    var nameA = a.parkingSpaceTitle.title.toUpperCase();
    var nameB = b.parkingSpaceTitle.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return res;
}

