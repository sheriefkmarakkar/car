import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-mybook',
  templateUrl: './mybook.component.html',
  styleUrls: ['./mybook.component.css']
})
export class MybookComponent implements OnInit {
mybooks;
uid;
cname;
num;
from;
to;
id;
  constructor(private s:Service1Service,private r:Router) { }

  ngOnInit() {
    this.uid=localStorage.getItem("uid")
    this.s.getmybook(this.uid).subscribe(data=>{
this.mybooks=data;
    })
  }
  public removeb(id)
  {
    this.s.removeb(id).subscribe();
    this.r.navigate(['/cars'])
  }
  

}
