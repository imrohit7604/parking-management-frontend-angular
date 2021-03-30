import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL:string="http://localhost:3002/api";

  constructor(private http: HttpClient) { }

  getUser()
  {
    const hitURL:string=this.URL.concat("/users/me");
    return this.http.get<userResponse>(hitURL)
    .pipe(
      map(res => {
          if(res ){          
              localStorage.setItem('userInfo', JSON.stringify(res));
          }
          return res;
      })
  );

  }

  createUser(name:string,email:string,password:string,typeOfUser:string){
    const hitURL:string=this.URL.concat("/users");
    return this.http.post(hitURL,{name,email,password,typeOfUser});
  }

  checkEmail(email:string)
  {
     const hitURL:string=this.URL.concat("/auth/checkMail")
    return this.http.post<checkMailResponse>(hitURL,{email});
  }

  logout(){
    // remove user from local storage
    localStorage.removeItem('JWTToken');
}

  login(email:string,password:string)
  {
    const hitURL:string=this.URL.concat("/auth");
    return this.http.post<loginResponse>(hitURL,{email,password})
    .pipe(
      // the backend service sends an instance of the user
      // user: any (because .post<any>)
      map(res => {
          // login successful if the response has jwt token
          if(res && res.token){
            // store user details and jwt token in the local storage to keep the user logged in between page refreshes
          
              localStorage.setItem('JWTToken', JSON.stringify(res.token));
          }

          return res;
      })
  );
  }
}

export interface checkMailResponse{
  found:boolean
}
export interface loginResponse{
  messsage:string,
  token:string
}
export interface userResponse{
  name:string,
  email:string,
  typeOfUser:boolean
}