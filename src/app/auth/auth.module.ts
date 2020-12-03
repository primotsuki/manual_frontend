import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  NbLayoutModule,
  NbAlertComponent,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule,
  NbToastrModule
} from '@nebular/theme'


@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    //HttpClientModule,
    RouterModule,
    NbLayoutModule,
    AuthRoutingModule,
    //NbAlertComponent,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbCardModule,
    NbToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
