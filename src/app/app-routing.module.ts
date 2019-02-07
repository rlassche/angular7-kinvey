import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component'
import { LogoutComponent } from '../app/auth/logout/logout.component'
import { ResetPasswordComponent } from '../app/auth/reset-password/reset-password.component'
import { DeleteuserComponent } from '../app/auth/delete-user/delete-user.component'
import { SignupComponent } from '../app/auth/signup/signup.component'
import { KinveyComponent } from '../app/test/kinvey/kinvey.component'

const routes: Routes = [ 
  { path: 'kinvey', component: KinveyComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'delete-user', component: DeleteuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
