import { Component, OnInit } from '@angular/core'; 
import {Service1Service} from '../service1.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name:string;
email:string;
phn:string;
pass:string;
role="user";
  
  constructor(private s:Service1Service,private r:Router) { }

  ngOnInit() {

  }
  public signup()
  {
    this.s.data(this.name,this.email,this.phn,this.pass,this.role).subscribe()
    this.r.navigate(['/cars'])
   
  }

}
