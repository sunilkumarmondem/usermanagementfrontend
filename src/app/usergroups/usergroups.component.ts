import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.css']
})
export class UsergroupsComponent implements OnInit {

  constructor(private service:TaskService, private router:Router) { }

  ngOnInit() {
  	this.getgroupsnames();
  }

  public groups;
  private hiddenform:boolean=true;
  private hiddenbutton:boolean=false;
 usergroup={} ;

  getgroupsnames(){
  	
  	this.service.getgroups().subscribe(data => this.groups=data);
  }

  newgroup(){
  	this.hiddenform=false;
  	this.hiddenbutton=true;
  }

  addgroupbyservice(){
  	this.service.addgroup(this.usergroup).subscribe(data =>this.groups.push(data));
  

  	this.hiddenform=true;
  	this.hiddenbutton=false;
  	


  }

  deletegroup(group){
  	this.service.deletegroupfromservice(group).subscribe(()=>this.getgroupsnames());
  }

  cancel(){
  	this.hiddenform=true;
  	this.hiddenbutton=false;
  }

}
