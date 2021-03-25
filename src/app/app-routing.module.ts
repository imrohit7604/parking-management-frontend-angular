import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent  },
  {path:"signup",component:SignupComponent  },
  {path:"dashboard",component:DashboardComponent  },
  {path:"**",component:NotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
