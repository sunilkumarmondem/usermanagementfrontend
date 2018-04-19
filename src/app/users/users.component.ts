import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:TaskService, private route:ActivatedRoute) { }

  public groups:any;
  userdata={};
  public users:any;
  private hiddenform:boolean=true;
  private hiddenbutton:boolean=false;
  private hiddenform2:boolean=false;

  ngOnInit() {
  	
  	const gnm =this.route.snapshot.paramMap.get('gnm');

  	console.log("Group :" +gnm);
  	gnm == null ?  this.listofusers() : this.listofusersgroup(gnm);
  	
  	this.groupnames();
  	
  }

  groupnames(){
  	this.service.getgroupnamesfromservice().subscribe(data =>this.groups=data);
  }

  adduser(){
  	this.service.addusersfromservice(this.userdata).subscribe(data =>this.users.push(data));
  	this.hiddenform=true;
  	this.hiddenform2=false;
  	this.hiddenbutton=false;
  }
newuser(){
	this.hiddenform=false;
	this.hiddenform2=true;
	this.hiddenbutton=true;
}

listofusers(){
	this.service.getusersfromservice().subscribe(data =>this.users=data)
}
listofusersgroup(gnm){
	this.service.getusersgroupfromservice(gnm).subscribe(data =>this.users=data)
}
cancel(){
	this.hiddenform=true;
	this.hiddenform2=false;
}

delete(userid){
	this.service.deleteuser(userid).subscribe(()=>this.listofusers());
}


}
