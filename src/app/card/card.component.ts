import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formBuilder:FormBuilder,private parkingService:ParkingService) { }

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
          console.log("res",res);  
          this.onBackClick();
        },
        err=>{
          this.error=err.error;
          console.log(err.error)
        })    
    }  
    else
    {
      const {parkingZoneId,parkingSpaceId}=this.spaceInfo;
      const registerNo=this.form.get("registerNo")?.value
      this.parkingService.parkVehicle(parkingZoneId,parkingSpaceId,registerNo)
      .subscribe(
        res=>{
          console.log("res",res);  
          this.onBackClick();
        },
        err=>{
          this.error=err.error;
          console.log(err.error)
        })
    }
  
  }

  registerNo(){
    return this.form.get("registerNo");
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      registerNo:["",[Validators.required]]
    })
    if(this.spaceInfo.registrationNumber)
    {
      this.form.get("registerNo")?.setValue(this.spaceInfo.registrationNumber);
      this.form.get("registerNo")?.disable();
    }
   
  }

}
