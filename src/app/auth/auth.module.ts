import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthLoginComponent, AuthRegisterComponent],
  imports: [CommonModule, AuthRoutingModule, RouterModule],
})
export class AuthModule {}
