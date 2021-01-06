import { Component, OnInit } from '@angular/core';
import { Service1Service} from '../service1.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
uid;
name:string;
email:string;
phn:string;
pass:string;
user;
res;
  constructor(private s:Service1Service,private r:Router) { }
public update()
{
  this.s.update(this.uid,this.user,this.email,this.phn,this.pass).subscribe()
  this.r.navigate(['/cars'])
  
}
  ngOnInit() {
    this.uid=localStorage.getItem("uid");
    alert(this.uid);
     
     this.name=localStorage.getItem("user");
     this.email=localStorage.getItem("email");
     this.phn=localStorage.getItem("phn");
     this.pass=localStorage.getItem("pass");
  }


}
