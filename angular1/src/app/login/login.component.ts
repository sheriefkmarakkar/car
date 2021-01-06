import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Service1Service} from '../service1.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign:Boolean=false;
  uname:String;
  pass:String;
  email;
  user;
  constructor(private r: Router,private s:Service1Service
    ) { }
    public signup()
    {
      alert("function")
      this.r.navigate(['/signup'])

    }
  ngOnInit() {

  }
  public login()
  {
     this.s.login(this.uname,this.pass).subscribe(data=>{
       console.log(data);
       this.email=data;
       if(this.email.length>0)
      
       localStorage.setItem("user",this.email[0].name);
       localStorage.setItem("uid",this.email[0]._id);
       localStorage.setItem("email",this.email[0].email);
     
       localStorage.setItem("phn",this.email[0].phn);
       localStorage.setItem("pass",this.email[0].pass);
       localStorage.setItem("role",this.email[0].role);
       this.r.navigate(['/cars'])
     },error=>{
      this.r.navigate(['/login'])
     })
     
     }
    
     
  }
 


