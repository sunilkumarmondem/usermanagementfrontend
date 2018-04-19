import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
	user={};

  constructor(private service:TaskService, private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
  	this.geteditusers();
  }

  geteditusers(){
  	const _id =this.route.snapshot.paramMap.get('_id');
  	this.service.geteditusersfromservice(_id).subscribe(data =>this.user=data);
  }

  goback(){
  this.location.back();
  }

  save(){
  	this.service.updateuser(this.user).subscribe(() =>this.goback());
  }

}
