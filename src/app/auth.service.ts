import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL:string="http://localhost:3002/api";

  constructor(private http: HttpClient) { }

  chechEmail(email:string)
  {
     const hitURL:string=this.URL.concat("/auth/checkMail")
    return this.http.post<checkMailResponse>(hitURL,{email});
  }
}

export interface checkMailResponse{
  found:boolean
}