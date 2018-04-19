import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginuserdata={};

  constructor(private service:AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginuser(){
  this.service.loginuserfrom(this.loginuserdata).
  subscribe(res => {
  	localStorage.setItem('token',res.token);
  	this.router.navigate(['/usergroups']);
  }),
  err => console.log(err);

}
}