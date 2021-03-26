import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) { }

  private URL:string="http://localhost:3002/api";
  private token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjNzEzODkwZWUyZTMyZGNhMTI5NmUiLCJlbWFpbCI6InJvaGl0MUBnbWFpbC5jb20iLCJ0eXBlT2ZVc2VyIjp0cnVlLCJpYXQiOjE2MTY3NTQ0NDN9.Scbe0A8fD6QEsEIOus72N_-5IVK2Qz-ocMnleToSWN0"
  getParkingZones()
  {
    const headers:HttpHeaders = new  HttpHeaders().set("x-auth-token", this.token);
     const hitURL:string=this.URL.concat("/parkingZone")
    return this.http.get<parkingZones>(hitURL, { headers });
  }

  getZoneSpaces(parkingZoneId:string="")
  {
    const headers:HttpHeaders = new  HttpHeaders().set("x-auth-token", this.token)
    .set("parkingZoneId",parkingZoneId);
    const hitURL:string=this.URL.concat("/parkingSpace")
    return this.http.get<any>(hitURL, { headers });
  }

  parkVehicle(parkingZoneId:string, parkingSpaceId:string, registrationNumber:string)
  {
    const headers:HttpHeaders = new  HttpHeaders().set("x-auth-token", this.token);
     const hitURL:string=this.URL.concat("/vehicleParking")
    return this.http.post<any>(hitURL,{parkingZoneId,parkingSpaceId,registrationNumber}, { headers });
  }

  releaseVehicle(vehicle_Id:string)
  {
    const headers:HttpHeaders = new  HttpHeaders().set("x-auth-token", this.token);
     const hitURL:string=this.URL.concat("/vehicleParking")
    return this.http.put<any>(hitURL,{vehicle_Id} ,{ headers });
  }

  getParkingReport(date:Date)
  {
    const headers:HttpHeaders = new  HttpHeaders().set("x-auth-token", this.token);
    const hitURL:string=this.URL.concat("/vehicleParking/parkingDetails")
   return this.http.post  <parkingReports>(hitURL,{
     date:{day: date.getDate(),
      month: date.getMonth(),
    year: date.getFullYear(),}
  } ,{ headers });
  }
}

export interface parkingZones{
  zones:zone[]
}

export interface zone{
  _id:string,
  parkingZoneTitle:string
}

export interface parkingSpace{
  spaces:space  []
}

export interface space{
  parkingSpaceTitle: {
    "title": string,
    "vehicleId":string
  },
  parkingSpaceId: string,
  parkingZoneId: string,
  registrationNumber: string
  }

  export interface report{
    title:string,
    value:[
      {
      title:string,
      value:{
        noOfBookings:number,
        vehicleParked:number
              }
      }]
}
export interface parkingReports{
  reports:report[]
}