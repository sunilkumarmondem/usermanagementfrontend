import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  constructor(private http:HttpClient) { }

  private getgroupurl='http://localhost:8080/groups';
  private addgroupurl='http://localhost:8080/addgroup';
  private adduserurl='http://localhost:8080/adduser';
  private getusersurl='http://localhost:8080/users';
	private getusergroup='http://localhost:8080/users_group';

  getgroups(){
  	return this.http.get<any>(this.getgroupurl);
  }

  addgroup(group){
  	return this.http.post<any>(this.addgroupurl,group,httpOptions);

  }

  editgroup(_id){
  	return this.http.get<any>(`${this.getgroupurl}/${_id}`);
  }

  updategroup(group){
  	return this.http.put<any>(`${this.getgroupurl}/${group._id}`,group,httpOptions);
  }

  deletegroupfromservice(group){
  	return this.http.delete<any>(`${this.getgroupurl}/${group}`,httpOptions);
  }

  getgroupnamesfromservice(){
  	return this.http.get<any>(this.getgroupurl);
  }

  addusersfromservice(user){
  	return this.http.post<any>(this.adduserurl,user,httpOptions);
  }
  getusersgroupfromservice(group){
  	return this.http.get<any>(`${this.getusergroup}/${group}`);
  }
  getusersfromservice(){
  	return this.http.get<any>(this.getusersurl);
  }
  getusersdetailsfrom(_id){
  	return this.http.get<any>(`${this.getusersurl}/${_id}`);

  }
  updateuser(user){
  	return this.http.put<any>(`${this.getusersurl}/${user._id}`,user,httpOptions);

  }

 geteditusersfromservice(_id){
 	return this.http.get<any>(`${this.getusersurl}/${_id}`);

 }
 deleteuser(userid){
 	return this.http.delete<any>(`${this.getusersurl}/${userid}`,httpOptions);
 }

}

