import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService, private router:Router){}

  canActivate():boolean {
  	if(this.service.loggedin()){
  		return true;
  	}else{
  		this.router.navigate(['/login']);
  		return false;
  	}
  }

}
