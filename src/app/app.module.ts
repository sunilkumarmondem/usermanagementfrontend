import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UsergroupsComponent } from './usergroups/usergroups.component';
import {AuthService} from './auth.service';
import {TaskService} from './task.service';
import {AuthGuard} from './auth.guard';

import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EditgroupComponent } from './editgroup/editgroup.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { EdituserComponent } from './edituser/edituser.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    UsergroupsComponent,
  
    UserdetailsComponent,
  
    EditgroupComponent,
  
    UserdetailComponent,
  
    EdituserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
