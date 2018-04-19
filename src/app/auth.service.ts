import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
	private registerurl = 'http://localhost:8080/register';
	private loginurl = 'http://localhost:8080/login';


  constructor(private http:HttpClient, private router:Router) { }

  registeruserfrom(user){
  	return this.http.post<any>(this.registerurl,user);
  }

  loginuserfrom(user){
  	return this.http.post<any>(this.loginurl,user);
  }

  loggedin(){
  	return !!localStorage.getItem('token');

  }

  logout(){
  	localStorage.removeItem('token');
  	this.router.navigate(['/user']);
  }

}
