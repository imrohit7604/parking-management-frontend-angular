import { Component, OnInit } from '@angular/core';
import { AuthService, userResponse } from '../auth.service';
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
  userInfo!:userResponse
  constructor(private parkingService:ParkingService,private authService:AuthService) { }

  ngOnInit(): void {
    //Getting all parking zones form DB
    this.parkingService.getParkingZones().subscribe(
      res=>{this.parkingZones=res; this.parkingZones.push({id:"",parkingZoneTitle:"All Zone"})}
    )
    //Getting all zone spaces from DB
   this.parkingService.getZoneSpaces().subscribe(
     res=>{this.parkingSpaces=sortByAsec(res); }
   ) 
   //Getting parking report from DB
   this.parkingService.getParkingReport(new Date()).subscribe(
     res=>{this.parkingReport=res}
   )
   //Getting user Info from  DB
   this.authService.getUser().subscribe(
     res=>{this.userInfo=res}
   )
  }
  
  onZoneClick(zone:zone):void{
    this.parkingService.getZoneSpaces(zone._id).subscribe(
      res=>{this.parkingSpaces=sortByAsec(res); }
    )
  }

  onResetClick()
  {
    this.parkingService.reset().subscribe(res=>console.log(res))
  }

  onReportClick(date:string)
  {
    if(date==null||date=="")
    return;
    this.parkingService.getParkingReport(new Date(date)).subscribe(
      res=>{this.parkingReport=res;}
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

