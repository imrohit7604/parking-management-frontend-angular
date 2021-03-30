import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userResponse } from '../auth.service';

import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  switch:boolean=false
  form!: FormGroup;
  error:any
  userInfo!:userResponse
  constructor(private formBuilder:FormBuilder,private parkingService:ParkingService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      registerNo:["",[Validators.required]]
    })

    if(this.spaceInfo.registrationNumber)
    {
      this.form.get("registerNo")?.setValue(this.spaceInfo.registrationNumber);
      this.form.get("registerNo")?.disable();
    }
    this.userInfo=JSON.parse(localStorage.getItem('userInfo')!)
  }

  @Input("spaceInfo") spaceInfo:any;
  onBackClick():void{
    this.switch=!this.switch; 
  }

  onSubmit():void{
    if(this.spaceInfo.registrationNumber)  
    {
      const vehicleId=this.spaceInfo.parkingSpaceTitle.vehicleId;
      this.parkingService.releaseVehicle(vehicleId)
      .subscribe(
        res=>{ 
          this.onBackClick();
        },
        err=>{
          this.error=err.error;
        })    
    }  
    else
    {
      const {parkingZoneId,parkingSpaceId}=this.spaceInfo;
      const registerNo=this.form.get("registerNo")?.value
      this.parkingService.parkVehicle(parkingZoneId,parkingSpaceId,registerNo)
      .subscribe(
        res=>{ 
          this.onBackClick();
        },
        err=>{
          this.error=err.error;
        })
    }
  
  }

  registerNo(){
    return this.form.get("registerNo");
  }

 

}
