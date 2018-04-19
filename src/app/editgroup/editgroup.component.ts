import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';


@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.css']
})
export class EditgroupComponent implements OnInit {

  constructor(private service:TaskService, private route:ActivatedRoute,private location:Location) { }

  group={};

  ngOnInit() {
  	this.editgroupfromservice();
  }

  editgroupfromservice(){
  	const _id =this.route.snapshot.paramMap.get('_id');
  	this.service.editgroup(_id).subscribe(data =>this.group=data);
  }

  goback(){
  this.location.back();
  }

save(){
	this.service.updategroup(this.group).subscribe(() =>this.goback());
}


}
