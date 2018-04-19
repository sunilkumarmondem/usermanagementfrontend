import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UsergroupsComponent } from './usergroups/usergroups.component';
import { EditgroupComponent } from './editgroup/editgroup.component';
import {AuthGuard} from './auth.guard';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
{path:'',redirectTo:'/user',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'user',component:UsersComponent},
{path:'users/:gnm',component:UsersComponent},
{path:'editgroup/:_id',component:EditgroupComponent},
{path:'userdetail/:_id',component:UserdetailComponent},
{path:'edituser/:_id',component:EdituserComponent},
{path:'usergroups',component:UsergroupsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
