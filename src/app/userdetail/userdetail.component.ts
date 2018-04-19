import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
users ={};

  
  constructor(private service:TaskService, private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
  	this.getuserdetails();
  }

  getuserdetails(){
  	const _id =this.route.snapshot.paramMap.get('_id');
  	this.service.getusersdetailsfrom(_id).subscribe(data =>this.users=data);
  }

  goback(){
  this.location.back();
  }

}
