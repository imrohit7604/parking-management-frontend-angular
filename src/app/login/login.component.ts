import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl!: string;
  loading!: boolean;
  error!: boolean;
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,  private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {     
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]],
    })
    this.returnUrl =  '/dashboard';
  }

 
 

  email():AbstractControl|null{
    return this.loginForm.get("email")
  }
  password():AbstractControl|null{
    return this.loginForm.get("password")
  }

  onSubmit():void{
    console.log(this.loginForm.value)
    if(this.loginForm.invalid){
      return;
  }

  this.loading = true;

  this.authenticationService.login(this.email()?.value, this.password()?.value)
  .pipe(first())
  .subscribe(
      data => {
          this.error=false
          this.loading=false
          this.router.navigate([this.returnUrl]);
          
      },
      error => {
          this.error = true;
          this.loading = false;
      }
  )
  }
  

}
