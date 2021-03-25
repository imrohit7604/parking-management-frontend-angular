import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) { }

  private URL:string="http://localhost:3002/api";
  
  private  headers:HttpHeaders = new  HttpHeaders().set("x-auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjNzEzODkwZWUyZTMyZGNhMTI5NmUiLCJlbWFpbCI6InJvaGl0MUBnbWFpbC5jb20iLCJ0eXBlT2ZVc2VyIjp0cnVlLCJpYXQiOjE2MTY2ODE1MTJ9.8NNAGFruxcddVNK7pQMH1x6n3a9bctgmhAkNimnHK38");

  

  getParkingZones()
  {
    
     const hitURL:string=this.URL.concat("/parkingZone")
    return this.http.get<parkingZones>(hitURL, { headers:this.headers });
  }
}
export interface parkingZones{
  zones:{_id:string,parkingZoneTitle:string}[]
}